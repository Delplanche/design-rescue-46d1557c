import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
const KEY = "mvdz-theme";

export const themeInitScript = `(function(){try{var t=localStorage.getItem('${KEY}')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

function apply(theme: Theme) {
  const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = (localStorage.getItem(KEY) as Theme | null) ?? "system";
    setTheme(saved);
    requestAnimationFrame(() => document.documentElement.classList.add("theme-ready"));
  }, []);

  useEffect(() => {
    apply(theme);
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const choose = (t: Theme) => {
    localStorage.setItem(KEY, t);
    setTheme(t);
  };

  const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
    { value: "light", label: "Lichte modus", Icon: Sun },
    { value: "dark", label: "Donkere modus", Icon: Moon },
    { value: "system", label: "Systeemstandaard", Icon: Monitor },
  ];

  return (
    <div className="theme-toggle" role="group" aria-label="Weergave">
      {options.map(({ value, label, Icon }) => (
        <button key={value} type="button" aria-label={label} title={label} aria-pressed={theme === value} onClick={() => choose(value)}>
          <Icon />
        </button>
      ))}
    </div>
  );
}
