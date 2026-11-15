import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") === "dark"; }
    catch { return false; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); }
    catch { }
  }, [dark]);
  return <button aria-pressed={dark} onClick={() => setDark((d) => !d)}>
  {dark ? "Switch to light theme" : "Switch to dark theme"}
  </button>;
}