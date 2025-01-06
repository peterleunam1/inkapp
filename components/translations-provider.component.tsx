"use client";

import { useMemo } from "react";
import initTranslations from "@/app/i18n";
import { createInstance, Resource } from "i18next";
import { I18nextProvider } from "react-i18next";

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18nInstance = useMemo(() => {
    const instance = createInstance();
    initTranslations({locale, namespaces, i18nInstance:instance, resources});
    return instance;
  }, [locale, namespaces, resources]);

return  <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;

}
