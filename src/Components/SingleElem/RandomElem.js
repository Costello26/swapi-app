import { useEffect } from 'react';
import { SingleElem } from './SingleElem';
import { updateElem } from '../../Functions/elemType';

export const RandomElem = ({randomElem, setRandomElem, type}) => {
    useEffect(()=>{
        updateElem(type, setRandomElem);
        setInterval(updateElem(type, setRandomElem), 5000);
    }, [ ]);
    return(
        <SingleElem content={randomElem}/>
    )
}
