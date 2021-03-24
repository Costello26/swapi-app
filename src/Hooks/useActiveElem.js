import { useState } from 'react';

export const useActiveElem = () => {
    const [activeElem, setActiveElem] = useState({loading: true});
    return{activeElem, setActiveElem}
}