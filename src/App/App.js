import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "../style/index.css";

import Footer from "../components/Footer";
import TodoList from "../containers/TodoList";

export default function App() {
  const searchParams = new URLSearchParams(window.location.search)
  const language = searchParams.get("lang") || "en"

  const handleLanguageChange = (localeId) => {
    const searchParams = new URLSearchParams()
    searchParams.append("lang", localeId)

    window.location.search = searchParams.toString()
  }

  return (
    <HashRouter>
      <React.Suspense fallback="Loading...">
        <React.Fragment>
          <div className="todoapp">
            <Route path="/:filter?" component={TodoList} />
          </div>
          <Footer onLanguageChange={handleLanguageChange} language={language} />
        </React.Fragment>
      </React.Suspense>
    </HashRouter>
  );
}
