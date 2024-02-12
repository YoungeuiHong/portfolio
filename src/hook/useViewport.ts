import { headers } from "next/headers";

export const useViewport = () => {
  const viewport = headers().get("viewport");

  return {
    isMobile: viewport === "mobile",
    isDesktop: viewport === "desktop",
  };
};
