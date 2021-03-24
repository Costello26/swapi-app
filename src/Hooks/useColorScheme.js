import { useState } from 'react';

export const useColorScheme = () => {
    const [colorScheme, setColorScheme] = useState({
        dark: false,
        icon: 'fas fa-sun',
        text: '#111',
        primary: '#fff',
        secondary: '#eee',
        active: 'rgb(107, 0, 173)'
    })
    return{colorScheme, setColorScheme}
}