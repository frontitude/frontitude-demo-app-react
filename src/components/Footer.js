import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSelectDropdown from './LanguageSelectDropdown';

export default function Footer(props) {
  const { onLanguageChange = () => {}, language } = props
  const { t } = useTranslation('strings');

  return (
    <footer className="info">
      <p>{t("double_click_instruction")}</p>
      
      <div className="language-wrapper">
        <LanguageSelectDropdown onLanguageChange={onLanguageChange} language={language} />
      </div>
    </footer>
  );
}
