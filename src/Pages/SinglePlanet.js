import { useEffect, useContext} from 'react'
import Swapi from '../Services/swapi-service'
import { Context } from '../Functions/context'
import { PageTemp } from './PageTemp'
import { Loader } from '../Components/Loader/Loader'  

export const SinglePlanet = ({match}) => {
    const { activeElems: {activeElem, setActiveElem}} = useContext(Context)
        
    
    useEffect(()=>{
        const swapi = new Swapi()
        swapi.getPlanet(match.params.id)
        .then((person)=>{
            person.name ? setActiveElem(person) : setActiveElem(false)
        })
        return () => {
            setActiveElem({loading: true})
        }
    }, [match.params.id, setActiveElem])
    return(
        <>
            {   activeElem.loading ?
                <Loader/>
                :
                <PageTemp activeElem={activeElem}/>
            }
        </>
    )
}

