import { RandomElem } from '../Components/SingleElem/RandomElem';
import { ElemById } from '../Components/SingleElem/ElemById';
import { StarshipsList } from '../Components/ItemList/StarshipsList';
import {Helmet} from "react-helmet";

export const StarshipsPage = () => {
    return(
        <>
            <Helmet title='Starships - SWAPI App' />
            <div className="app__mainblock">
                <RandomElem type="planet"/>
                <ElemById type="starship" />
            </div>
            <div className="app__sidebar">
                <StarshipsList/>
            </div>
        </>
    )
}