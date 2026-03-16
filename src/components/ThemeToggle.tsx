
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing theme to avoid hydration issues
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="custom"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-transparent px-2 py-2 backdrop-blur-sm border-white/20 hover:bg-white/20 dark:hover:bg-navy-dark/50"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white dark:text-white" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
