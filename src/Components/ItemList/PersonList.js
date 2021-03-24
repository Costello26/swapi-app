import { useEffect, useContext, useCallback, useMemo } from 'react'
import { ItemList } from './Itemlist';
import Swapi from '../../Services/swapi-service';
import { Context } from '../../Functions/context';

export const PersonList = () => {
    const {
        currentLists: {currentList, setCurrentList},
        activeElems: {setActiveElem},
        colorSchemes: {colorScheme}
    } = useContext(Context);
    const swapi = useMemo(()=> new Swapi(), [])
   
    const memoizedCallback = useCallback(()=>{
        const setList = () => {
            swapi.getAllPeople()
                .then((AllElems)=> {setCurrentList(AllElems)})
        }
        setList()
    }, [setCurrentList, swapi])
    
    useEffect(()=>{
        memoizedCallback()
    }, [memoizedCallback])
    const pagination = (e, direction) => {
        e.preventDefault()
        swapi.getAllPeople(direction)
            .then((AllElems)=> {setCurrentList(AllElems)})
    }
    return(
        <ItemList 
            currentList={currentList}
            setActiveElem={setActiveElem}
            pagination={pagination}
            colorScheme={colorScheme}/>
    )
}