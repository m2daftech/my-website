"use client";

import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const leftData = [
  { value: 27, name: "Second Master 2" },
  { value: 19, name: "Stage" },
  { value: 13, name: "Ecole de commerce" },
  { value: 6, name: "Thèse" },
  { value: 7, name: "LLM" },
  { value: 18, name: "CRFPA/EFB" },
  { value: 7, name: "CDD/CDI" },
  { value: 4, name: "Autres" },
];

const rightData = [
  { value: 34, name: "Corporate" },
  { value: 22, name: "Financier" },
  { value: 7, name: "Restructuring" },
  { value: 3, name: "Fiscalité" },
  { value: 4, name: "Pénal" },
  { value: 14, name: "Autres" },
  { value: 17, name: "Contentieux" },
];

export default function StatsCharts() {
  const [isMobile, setIsMobile] = useState(false);
  const [showLeftLegend, setShowLeftLegend] = useState(false);
  const [showRightLegend, setShowRightLegend] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" ? window.innerWidth < 640 : false);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const common = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      backgroundColor: "rgba(50,50,50,0.9)",
      textStyle: { color: "#fff" },
    },
    legend: { show: false },
  };

  // helper to build a linear gradient for echarts
  const makeGradient = (start: string, end: string) => ({
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: start },
      { offset: 1, color: end },
    ],
    global: false,
  });

  // gradient palettes (start -> end) for a textured/modern look
  const leftGradients = [
    ["#7C3F58", "#C97A9A"],
    ["#F29E4C", "#F6C67A"],
    ["#6DA3B8", "#A6D1DA"],
    ["#B07AA1", "#D6B8D1"],
    ["#9AB87A", "#CFE6B3"],
    ["#E3C07B", "#F6DE9D"],
    ["#5F6B8A", "#9AA3BF"],
    ["#C6D6D9", "#EAF3F4"],
  ];

  const rightGradients = [
    ["#264653", "#426672"],
    ["#2A9D8F", "#74C9BA"],
    ["#E76F51", "#F4A38A"],
    ["#F4A261", "#F8C69A"],
    ["#E9C46A", "#F3DD9D"],
    ["#8AB17D", "#C2E2B9"],
    ["#6A4C93", "#9B83C9"],
  ];

  // attach gradient itemStyle to data entries so each slice gets its own gradient and subtle shadow
  const leftStyled = leftData.map((d, i) => ({
    ...d,
    itemStyle: {
      color: makeGradient(...(leftGradients[i % leftGradients.length] as [string, string])),
      borderColor: "#ffffff",
      borderWidth: 2,
      shadowBlur: 14,
      shadowColor: "rgba(0,0,0,0.10)",
    },
  }));

  const rightStyled = rightData.map((d, i) => ({
    ...d,
    itemStyle: {
      color: makeGradient(...(rightGradients[i % rightGradients.length] as [string, string])),
      borderColor: "#ffffff",
      borderWidth: 2,
      shadowBlur: 14,
      shadowColor: "rgba(0,0,0,0.10)",
    },
  }));

  const leftOption = {
    ...common,
    // keep the title minimal inside the canvas; we'll also render an HTML title for accessibility
    title: { text: "", left: "center", top: 8 },
    series: [
      {
        name: "Suite",
        type: "pie",
        radius: isMobile ? ["30%", "56%"] : ["28%", "60%"],
        center: ["50%", "55%"],
        roseType: "radius",
        data: leftStyled,
        emphasis: { itemStyle: { shadowBlur: 26, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.26)" } },
        label: { show: !isMobile, formatter: "{b}\n{d}%", color: "#222", fontSize: 11 },
        labelLine: { smooth: true, length: isMobile ? 6 : 10, length2: isMobile ? 4 : 6 },
      },
    ],
    backgroundColor: "transparent",
  };

  const rightOption = {
    ...common,
    title: { text: "", left: "center", top: 8 },
    series: [
      {
        name: "Expertise",
        type: "pie",
        radius: isMobile ? ["30%", "56%"] : ["28%", "60%"],
        center: ["50%", "55%"],
        roseType: "radius",
        data: rightStyled,
        emphasis: { itemStyle: { shadowBlur: 26, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.26)" } },
        label: { show: !isMobile, formatter: "{b}\n{d}%", color: "#222", fontSize: 11 },
        labelLine: { smooth: true, length: isMobile ? 6 : 10, length2: isMobile ? 4 : 6 },
      },
    ],
    backgroundColor: "transparent",
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col lg:flex-row gap-7 items-stretch w-full">
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-center font-semibold mb-3">À la suite du M2</h4>
            <div className="h-72 lg:h-[460px]">
              <ReactECharts option={leftOption} style={{ height: "100%", width: "100%" }} />
            </div>
            {isMobile && (
              <div className="mt-3">
                <button
                  onClick={() => setShowLeftLegend((s) => !s)}
                  className="text-sm text-[#5a0f19] font-medium"
                >
                  {showLeftLegend ? "Masquer les détails" : "Voir les détails"}
                </button>
                {showLeftLegend && (
                  <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                    {leftData.map((d, i) => (
                      <li key={d.name} className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-sm"
                          style={{ background: leftGradients[i % leftGradients.length][0] }}
                        />
                        <span className="flex-1">{d.name}</span>
                        <span className="font-semibold">{d.value}%</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h4 className="text-center font-semibold mb-3">Expertise (10 dernières promotions)</h4>
            <div className="h-72 lg:h-[460px]">
              <ReactECharts option={rightOption} style={{ height: "100%", width: "100%" }} />
            </div>
            {isMobile && (
              <div className="mt-3">
                <button
                  onClick={() => setShowRightLegend((s) => !s)}
                  className="text-sm text-[#5a0f19] font-medium"
                >
                  {showRightLegend ? "Masquer les détails" : "Voir les détails"}
                </button>
                {showRightLegend && (
                  <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                    {rightData.map((d, i) => (
                      <li key={d.name} className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-sm"
                          style={{ background: rightGradients[i % rightGradients.length][0] }}
                        />
                        <span className="flex-1">{d.name}</span>
                        <span className="font-semibold">{d.value}%</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
