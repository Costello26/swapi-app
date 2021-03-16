//Elements
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Components/Header/Header';
import { ColorToggler } from './Components/ColorToggler/ColorToggler';
import { RandomElem } from './Components/SingleElem/RandomElem';
import { ElemById } from './Components/SingleElem/ElemById';
import { PersonList } from './Components/ItemList/PersonList';

//Hooks
import { useRandomElem } from './Hooks/useRandomElem';
import { useCurrentList } from './Hooks/useCurrentList';
import { useActiveElem } from './Hooks/useActiveElem';

function App() {
  const randomElem = useRandomElem();
  const currentList = useCurrentList();
  const activeElem = useActiveElem();
  
  return (
    <div className="App">
      <GlobalStyles/>
      <ColorToggler/>
      <Header />
      <div className="app__mainblock">
        <RandomElem {...randomElem} type="planet"/>
        <ElemById {...activeElem} type="person" />
      </div>
      <div className="app__sidebar">
        <PersonList {...currentList} {...activeElem} />
      </div>
    </div>
  );
}

export default App;
