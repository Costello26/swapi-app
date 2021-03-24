import { RandomElem } from '../Components/SingleElem/RandomElem';
import { ElemById } from '../Components/SingleElem/ElemById';
import { PlanetsList } from '../Components/ItemList/PlanetsList';
import {Helmet} from "react-helmet";

export const PlanetsPage = ({randomElem, colorScheme, activeElem, currentList}) => {
    return(
        <>
            <Helmet title='Planets - SWAPI App' />
            <div className="app__mainblock">
                <RandomElem {...randomElem} {...colorScheme} type="person"/>
                <ElemById {...activeElem} {...colorScheme} type="planet" />
            </div>
            <div className="app__sidebar">
                <PlanetsList {...currentList} {...activeElem} {...colorScheme} />
            </div>
        </>
    )
}