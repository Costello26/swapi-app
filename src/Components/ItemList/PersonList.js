import { useEffect, useContext } from 'react'
import { ItemList } from './Itemlist';
import Swapi from '../../Services/swapi-service';
import { Context } from '../../Functions/context';

export const PersonList = () => {
    const {
        currentLists: {currentList, setCurrentList},
        activeElems: {setActiveElem},
        colorSchemes: {colorScheme}
    } = useContext(Context);
    const swapi = new Swapi();
    const setList = () => {
        swapi.getAllPeople()
            .then((AllElems)=> {setCurrentList(AllElems)})
    }
    useEffect(()=>{
        setList()
    }, [])
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