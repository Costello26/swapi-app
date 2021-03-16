import {useEffect} from 'react';
import { SingleElem } from './SingleElem';
import { updateElem } from '../../Functions/elemType'

export const ElemById = ({setActiveElem, activeElem, type}) => {
    
    return(
        <SingleElem content={activeElem}/>
    )
}