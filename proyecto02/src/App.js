import logo from './logo.svg';
import './App.css';

function mostrarTitulo(titulo) {
  return (
   <h1>{titulo}</h1> 
  );
}

function App() {
  return(
    <div id='divpadre'>
      {mostrarTitulo('Hola Mundo')}
      {mostrarTitulo('Fin')}
    </div>
  );
}

export default App;
