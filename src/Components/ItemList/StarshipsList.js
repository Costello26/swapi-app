import { useEffect, useContext, useCallback, useMemo } from 'react'
import { ItemList } from './Itemlist';
import Swapi from '../../Services/swapi-service';
import { Context } from '../../Functions/context';

export const StarshipsList = () => {
    const {
        currentLists: {currentList, setCurrentList},
        activeElems: {setActiveElem},
        colorSchemes: {colorScheme}
    } = useContext(Context)
    const swapi = useMemo(() => new Swapi(), []);
    const setList = useCallback( () => {
        swapi.getAllStarships()
            .then((AllElems)=> {setCurrentList(AllElems)})
    },[setCurrentList, swapi])
    useEffect(()=>{
        setList()
    }, [setList])
    const pagination = (e, direction) => {
        e.preventDefault()
        swapi.getAllStarships(direction)
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