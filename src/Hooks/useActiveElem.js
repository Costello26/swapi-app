import { useState } from 'react';

export const useActiveElem = () => {
    const [activeElem, setActiveElem] = useState({id: '1'});
    return{activeElem, setActiveElem}
}