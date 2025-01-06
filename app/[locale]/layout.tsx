import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import initTranslations from "../i18n";
import { TranslationsProvider } from "@/components";
import { PropsWithChildren } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<RootLayoutProps>) {
  const i18nNamespaces: string[] = ["default"];
  const { resources } = await initTranslations({locale, namespaces:i18nNamespaces});
  const fonts: string = `${geistSans.variable} ${geistMono.variable} antialiased`;

  return (
    <html lang="en">
      <body className={fonts}>
        <TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
          <main>{children}</main>
        </TranslationsProvider>
      </body>
    </html>
  );
}
