import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />  
      <ItemListContainer greeting={'Tienda en construccion'} />
      <ItemDetailContainer  />
    </div>
  );
}

export default App;

/*



const App = () => {
  return (
    <div>App</div>
  )
}

export default App

*/