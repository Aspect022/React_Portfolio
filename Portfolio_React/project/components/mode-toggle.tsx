"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        className="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      >
        <div className="theme-switch-thumb">
          {theme === "dark" ? (
            <MoonIcon className="h-3 w-3 text-primary" />
          ) : (
            <SunIcon className="h-3 w-3 text-primary" />
          )}
        </div>
      </Switch>
    </div>
  );
}