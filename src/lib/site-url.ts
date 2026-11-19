const siteUrl =
  import.meta.env.VITE_PUBLIC_SITE_URL?.trim() || "https://fipquetzaltenango.org";

export const SITE_URL = siteUrl.replace(/\/+$/, "");
