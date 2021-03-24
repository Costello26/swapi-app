//High level Dependencies
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './Services/History';
import { Context } from './Functions/context';

//Elements
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Components/Header/Header';
import { ColorToggler } from './Components/ColorToggler/ColorToggler';

//Pages
import { Homepage } from './Pages/Homepage';
import { PlanetsPage } from './Pages/PlanetsPage';
import { StarshipsPage } from './Pages/StarshipsPage';
import { CharactersPage } from './Pages/CharactersPage';
import { NotFound } from './Pages/404';

import { SingleCharacter } from './Pages/SingleCharacter';
import { SinglePlanet } from './Pages/SinglePlanet';
import { SingleStarship } from './Pages/SingleStarship';

//Hooks
import { useRandomElem } from './Hooks/useRandomElem';
import { useCurrentList } from './Hooks/useCurrentList';
import { useActiveElem } from './Hooks/useActiveElem';
import { useColorScheme } from './Hooks/useColorScheme';

function App() {
  const randomElems = useRandomElem();
  const currentLists = useCurrentList();
  const activeElems = useActiveElem();
  const colorSchemes = useColorScheme();

  const contextObj = {
    colorSchemes,
    randomElems,
    activeElems,
    currentLists,
  }
  
  return (
    <div className="App" id="App">
      <Context.Provider value={contextObj}>
        <Router history={history}>
          <GlobalStyles/>
          <ColorToggler/>
          <Header/>
          <Switch>
            <Route path='/' exact component={Homepage}/>
            <Route path='/planets/' exact component={PlanetsPage}/>
            <Route path='/characters' exact component={CharactersPage}/>
            <Route path='/starships/' exact component={StarshipsPage}/>
            
            <Route path='/characters/:id' exact component={SingleCharacter}/>
            <Route path='/planets/:id' exact component={SinglePlanet}/>
            <Route path='/starships/:id' exact component={SingleStarship}/>

            <Route path='/404' exact component={NotFound}/>
            <Route path='*'>
                <Redirect to='404'/>
            </Route>
          </Switch>
      </Router>
    </Context.Provider>
    </div>
  );
}

export default App;
