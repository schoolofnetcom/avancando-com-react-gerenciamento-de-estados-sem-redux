import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeButton from './ThemeButton';

export default function AppTheme() {
    const [theme, setTheme] = useState({ theme: 'light' });

    const handleChangeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ThemeProvider theme={theme}>
            <ThemeButton 
                type="button" 
                label="Change Theme"
                onClick={handleChangeTheme} />
        </ThemeProvider>
    );
}