import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />  
      <ItemListContainer greeting={'Tienda en construccion'} />
    </div>
  );
}

export default App;
