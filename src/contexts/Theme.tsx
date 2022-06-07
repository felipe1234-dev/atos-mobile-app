import React, { useState } from "react";
import { Severity } from "../types";

export interface ThemeValue {
    theme: "light"|"dark"|null,
    setTheme(newTheme: "light"|"dark"): void
};

export const ThemeContext = React.createContext<ThemeValue>({
    theme: null,
    setTheme: () => {},
});

export function ThemeProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light"|"dark"|null>(null);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}