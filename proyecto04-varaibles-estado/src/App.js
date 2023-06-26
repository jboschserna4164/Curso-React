import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function generarAleatorio() {
    const enteroAleatorio = Math.trunc(Math.random() * 10); /* se genera un aleatorio entre 0 y 9 */
    setNumero(enteroAleatorio);
  }
  
  const [numero, setNumero] = useState(0);

  return(
  <div>
    <p>Numero aleatorio: {numero}</p>
    <button onClick={generarAleatorio}>Generar numero aleatorio</button>
  </div>
  );
}

export default App;
