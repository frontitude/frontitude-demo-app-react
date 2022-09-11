import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('strings');

  return (
    <footer className="info">
      <p>{t("double_click_instruction")}</p>
    </footer>
  );
}
