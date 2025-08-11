"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type UTMParams = {
  utm_campaign: string;
  utm_source: string;
  utm_medium: string;
  utm_term: string;
  utm_content: string;
};

const defaultUTM: UTMParams = {
  utm_campaign: "",
  utm_source: "",
  utm_medium: "",
  utm_term: "",
  utm_content: "",
};

const UTMContext = createContext<UTMParams>(defaultUTM);

export const useUTM = () => useContext(UTMContext);

export const UTMProvider = ({ children }: { children: React.ReactNode }) => {
  const [utm, setUTM] = useState<UTMParams>(defaultUTM);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params: UTMParams = {
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_term: searchParams.get("utm_term") || "",
      utm_content: searchParams.get("utm_content") || "",
    };

    const hasUTM = Object.values(params).some(Boolean);
    if (hasUTM) {
      localStorage.setItem("utm_params", JSON.stringify(params));
      setUTM(params);
    } else {
      const saved = JSON.parse(localStorage.getItem("utm_params") || "{}");
      setUTM({ ...defaultUTM, ...saved });
    }
  }, [pathname, searchParams]);

  return <UTMContext.Provider value={utm}>{children}</UTMContext.Provider>;
};
