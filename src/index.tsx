import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Home from "./app/page";
import GalacticLanderPage from "./pages/galacticlander";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const getRenderPage = () => {
  if (
    window.location.host.startsWith("galacticlander") ||
    window.location.pathname.startsWith("/galacticlander")
  ) {
    return <GalacticLanderPage />;
  }

  return <Home />;
};

root.render(<React.StrictMode>{getRenderPage()}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
