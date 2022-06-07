import React from "react";

const initialTheme = "dark";

export interface ThemeValue {
    theme: "light"|"dark",
    toggleTheme(): void
};

export const ThemeContext = React.createContext<ThemeValue>({
    theme: initialTheme,
    toggleTheme: () => {},
});

export function ThemeProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<"light"|"dark">(initialTheme);
    
    const toggleTheme = () => setTheme(prevState => (
        prevState === "light" ? "dark" : "light"
    ));
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}