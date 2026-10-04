const siteUrl =
  import.meta.env.VITE_PUBLIC_SITE_URL?.trim() || "https://web-fipq.animesino.workers.dev";

export const SITE_URL = siteUrl.replace(/\/+$/, "");
