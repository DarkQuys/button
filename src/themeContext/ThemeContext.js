import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ chilrden }) {
    const [theme, setTheme] = useState('lightTheme');
    const toggleTheme = () => {
        setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
    };
    const valueTheme = { theme, toggleTheme };
    return <ThemeContext.Provider value={valueTheme}>{chilrden}</ThemeContext.Provider>;
}
