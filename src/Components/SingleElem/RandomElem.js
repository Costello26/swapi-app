import { useEffect, useContext } from 'react';
import { SingleElem } from './SingleElem';
import { updateElem } from '../../Functions/elemType';
import { Context } from '../../Functions/context';

export const RandomElem = ({type}) => {
    const {
        randomElems: {randomElem, setRandomElem},
        colorSchemes: {colorScheme}
    } = useContext(Context);
    useEffect(()=>{
        updateElem(type, setRandomElem);
        const upd = setInterval(() => updateElem(type, setRandomElem), 8000);
        return ()=>{
            clearInterval(upd)
        }
    }, [setRandomElem, type]);
    return(
        <SingleElem content={randomElem} colorScheme={colorScheme}/>
    )
}
