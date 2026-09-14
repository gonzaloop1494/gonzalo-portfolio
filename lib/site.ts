const fallbackSiteUrl = "https://gonzalopachecoagredano.vercel.app";

export const siteUrl = (process.env.SITE_URL || fallbackSiteUrl).replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
