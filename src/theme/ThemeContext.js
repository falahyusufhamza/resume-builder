import React from 'react';

const ThemeContext = React.createContext({
    theme : 'default',
    setTheme : (theme) => {}
});
export default ThemeContext;