import React from "react";
import { colors } from "../constants";
const initialTheme = "light";

export interface ThemeValue {
    theme: "light"|"dark",
    toggleTheme(): void,
    palette: typeof colors["dark"|"light"]
};

export const ThemeContext = React.createContext<ThemeValue>({
    theme: initialTheme,
    toggleTheme: () => {},
    palette: colors[initialTheme]
});

export function ThemeProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<"light"|"dark">(initialTheme);
    
    const toggleTheme = () => setTheme(prevState => (
        prevState === "light" ? "dark" : "light"
    ));
    
    const palette = colors[theme];
    
    return (
        <ThemeContext.Provider value={{ 
            theme, 
            toggleTheme,
            palette
        }}>
            {props.children}
        </ThemeContext.Provider>
    );
}