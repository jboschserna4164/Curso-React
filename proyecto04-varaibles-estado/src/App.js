import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [numeros, setNumeros] = useState([0,0,0,0,0]);

  function generarAleatorios() {
    const vector = new Array(5);
    for (let i = 0; i < vector.length; i++) {
      vector[i] = Math.trunc(Math.random() * 10);
    }
    setNumeros(vector);
  }
  
  return(
  <div>
    <p>Numero aleatorios: </p>
    {numeros.map(num => (<p>{num}</p>))}  {/* Para mostrar todos los elemento del vector llamamos al método map de la clase Array y le pasamos una función flecha que retorna para cada elemento del vector un valor encerrado entre las marcas 'p'*/}
    <button onClick={generarAleatorios}>Generar numeros aleatorios</button>
  </div>
  );
}

export default App;
