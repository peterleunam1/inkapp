"use client";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation();
  return (
    <div className="bg-red-400">
      InkApp - {t("greeting")}
    </div>
  );
}
