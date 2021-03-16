import { useState } from 'react';

export const useColorScheme = () => {
    const [colorScheme, setColorScheme] = useState({
        main: '#785aa6',
        dark: '#444',
    })
    return( colorScheme, setColorScheme)
}