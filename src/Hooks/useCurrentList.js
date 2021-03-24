import { useState } from 'react';

export const useCurrentList = () => {
    const [currentList, setCurrentList] = useState({loading: true});
    return {setCurrentList, currentList};
}