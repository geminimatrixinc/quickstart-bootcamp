// Example 3: Using useContext
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemeButton() {
    const theme = useContext(ThemeContext);

    return <button>{theme} Theme</button>;
}

export default ThemeButton;