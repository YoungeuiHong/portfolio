import { cookies } from "next/headers";

export const useViewport = () => {
  const viewport = cookies().get("viewport")?.value;

  return {
    isMobile: viewport === "mobile",
    isDesktop: viewport === "desktop",
  };
};
