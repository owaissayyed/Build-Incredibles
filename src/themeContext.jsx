import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Start in dark mode

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}> {/* Include theme here */}
            {children}
        </ThemeContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useTheme = () => useContext(ThemeContext);

// Export the ThemeContext for direct access if needed
export default ThemeContext;
