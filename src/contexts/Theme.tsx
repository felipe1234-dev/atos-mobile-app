import React from "react";

export interface ThemeValue {
    theme: "light"|"dark"|null,
    toggleTheme(): void
};

export const ThemeContext = React.createContext<ThemeValue>({
    theme: null,
    toggleTheme: () => {},
});

export function ThemeProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<"light"|"dark"|null>(null);
    
    const toggleTheme = () => setTheme(prevState => (
        prevState === "light" ? "dark" : "light"
    ));
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}