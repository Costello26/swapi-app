import {useEffect, useCallback, useContext} from 'react';
import { SingleElem } from './SingleElem';
import { updateElem } from '../../Functions/elemType'
import { Context } from '../../Functions/context';

export const ElemById = ({type}) => {
    const {
        activeElems: {setActiveElem, activeElem},
        colorSchemes: {colorScheme}
    } = useContext(Context);
    useCallback(()=>{
        setActiveElem()
    }, [setActiveElem])
    useEffect(()=>{
        updateElem(type, setActiveElem)
    }, [type, setActiveElem])
    return(
        <SingleElem content={activeElem} colorScheme={colorScheme}/>
    )
}