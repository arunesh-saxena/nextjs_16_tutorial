"use Client";

import { createContext, useContext } from "react";

const defaultTheme = {
    colors: {
        primary: "#0070f3",
        secondary: "#ff0080",
    },
};
const ThemeContenxt = createContext(defaultTheme);

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContenxt value={defaultTheme}>
            {children}
        </ThemeContenxt>
    );
};


export const userTheme = () => {
    return useContext(ThemeContenxt);
};