import { useState } from 'react';

export const useCurrentList = () => {
    const [currentList, setCurrentList] = useState(false);
    return {setCurrentList, currentList};
}