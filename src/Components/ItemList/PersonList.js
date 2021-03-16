import { useEffect } from 'react'
import { ItemList } from './Itemlist';
import Swapi from '../../Services/swapi-service';

export const PersonList = ({currentList, setCurrentList, activeElem, setActiveElem}) => {
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
            pagination={pagination}/>
    )
}