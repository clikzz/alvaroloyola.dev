import enMessages from "../../messages/en.json";
import esMessages from "../../messages/es.json";
import type { LocalizedString } from "@/data/content";

export type Locale = "en" | "es";
export type MessageKey = Exclude<keyof typeof enMessages, "$schema">;

export const messages = {
  en: enMessages,
  es: esMessages,
} satisfies Record<Locale, typeof enMessages>;

export function getMessage(
  locale: Locale,
  key: MessageKey,
  values: Record<string, string | number> = {}
): string {
  const template = String(messages[locale][key] ?? messages.en[key] ?? "");

  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    values[name] === undefined ? "" : String(values[name])
  );
}

export function getLocalizedText(
  value: LocalizedString,
  locale: Locale
): string {
  return value[locale] ?? value.en;
}
