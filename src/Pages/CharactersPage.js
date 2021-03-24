import { RandomElem } from '../Components/SingleElem/RandomElem';
import { ElemById } from '../Components/SingleElem/ElemById';
import { PersonList } from '../Components/ItemList/PersonList';
import {Helmet} from "react-helmet";

export const CharactersPage = () => {
    return(
        <>
        <Helmet title='Characters - SWAPI App'/>
        <div className="app__mainblock">
            <RandomElem type="planet"/>
            <ElemById type="person" />
        </div>
        <div className="app__sidebar">
            <PersonList/>
        </div>
        </>
    )
}