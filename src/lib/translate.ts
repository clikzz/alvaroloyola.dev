import { getLocale } from "@/paraglide/runtime.js";
import type { LocalizedString } from "@/data/content.js";

export function t(localized: LocalizedString): string {
  const locale = getLocale() as "en" | "es";
  return localized[locale] ?? localized.en;
}
