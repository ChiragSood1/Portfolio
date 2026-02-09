import { createContext, useContext, useState, useEffect } from "react";

const ColorModeContext = createContext(null);
const STORAGE_KEY = "chirag-portfolio-color-mode";

// Get initial color mode from localStorage or system preference
function getInitialColorMode() {
  // Handle server-side rendering
  if (typeof window === "undefined") {
    return "dark";
  }

  // Check localStorage first
  const savedMode = window.localStorage.getItem(STORAGE_KEY);
  if (savedMode === "light" || savedMode === "dark") {
    return savedMode;
  }

  // Fall back to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  // Update DOM and localStorage when mode changes
  useEffect(() => {
    document.documentElement.dataset.theme = colorMode;
    document.documentElement.style.colorScheme = colorMode;
    window.localStorage.setItem(STORAGE_KEY, colorMode);
  }, [colorMode]);

  // Toggle between light and dark mode
  const toggleColorMode = () => {
    setColorMode(currentMode => (currentMode === "dark" ? "light" : "dark"));
  };

  const contextValue = {
    mode: colorMode,
    isDark: colorMode === "dark",
    toggleMode: toggleColorMode,
  };

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used inside ColorModeProvider");
  }
  return context;
}
