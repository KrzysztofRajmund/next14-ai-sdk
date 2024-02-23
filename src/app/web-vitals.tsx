"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // console.log("WebVitals report:", metric);
  });
  return <></>;
}
