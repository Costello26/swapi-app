import { useState } from 'react';

export const useRandomElem = () => {
    const [randomElem, setRandomElem] = useState({
        loading: true,
        id: 2,
        type: 'planets',
        name: 'LOADING...',
        fields: [
        {label: '' , content: ''}
    ]});
    return {randomElem, setRandomElem}
}