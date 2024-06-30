import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const detectBrowser = () => {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Edg") > -1) {
    return "Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } else if (userAgent.indexOf("Opera") > -1) {
    return "Opera";
  } else if (
    userAgent.indexOf("Trident") > -1 ||
    userAgent.indexOf("MSIE") > -1
  ) {
    return "Internet Explorer";
  }

  return "Unknown";
};

export const detectDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  const isMobile =
    /android|webos|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent);
  const isTablet = /ipad|tablet|kindle|playbook|silk/.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  if (isMobile) {
    return "mobile";
  } else if (isTablet) {
    return "tablet";
  } else if (isDesktop) {
    return "desktop";
  } else {
    return "unknown";
  }
};

export const generateUniqueId = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
