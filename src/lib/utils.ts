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

export function addAndUpdateQueryParam(
  url: string,
  key: string,
  value: string
): string {
  // Encode the key and value to ensure special characters are handled
  const encodedKey = encodeURIComponent(key);
  const encodedValue = encodeURIComponent(value);

  // Split the URL into [base + query, fragment]
  const [baseAndQuery, fragment] = url.split("#");

  // Split baseAndQuery into [base, query]
  const [base, query] = baseAndQuery.split("?");

  // Initialize an array to hold query parameters
  const params: string[] = query ? query.split("&") : [];

  // Flag to check if the key exists
  let keyExists = false;

  // Iterate over existing parameters to find and update the key
  const updatedParams = params.map((param) => {
    const [currentKey, currentValue] = param.split("=");
    if (decodeURIComponent(currentKey) === key) {
      keyExists = true;
      return `${encodedKey}=${encodedValue}`;
    }
    return param;
  });

  // If the key does not exist, append it
  if (!keyExists) {
    updatedParams.push(`${encodedKey}=${encodedValue}`);
  }

  // Reconstruct the query string
  const newQuery = updatedParams.join("&");

  // Reconstruct the full URL
  let updatedUrl = base;
  if (newQuery) {
    updatedUrl += `?${newQuery}`;
  }
  if (fragment) {
    updatedUrl += `#${fragment}`;
  }

  return updatedUrl;
}

export function isUUID(str: string) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}
