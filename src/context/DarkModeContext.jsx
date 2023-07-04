import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // 또는 
        // setDarkMode((prev)=> !prev);
        updateDarkMode(!darkMode);
    };

    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme:dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, [])
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
    // 여기에 괄호가 없어서 안됐다면 , 왜 저기에 () 이 무조건 있어야하는 것인가?
}

export const useDarkMode = () => useContext(DarkModeContext);
// 다음과 같이 정의해주는 이유. 
// const { darkMode, toggleDarkMode }= useContext(DarkModeContext) 를 해줘야하는 것임
// 간소화 시켜주기 위해서 

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}
