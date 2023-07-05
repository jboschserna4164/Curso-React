import { useState } from 'react';
import './App.css';
import Dado from './Dado';

function App() {
  function generarValor() {
    return Math.trunc(Math.random()*6)+1; /* Math.trunc sirve para extraer la parte entera de ese numero ya que puede salir 3.141567... */
  }

  function tirarDados() {
    setValor1(generarValor());
    setValor2(generarValor());
    setValor3(generarValor());
  }

  const [valor1,setValor1] = useState(generarValor());
  const [valor2,setValor2] = useState(generarValor());
  const [valor3,setValor3] = useState(generarValor());

  return (
    <div>
      <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
      <button onClick={tirarDados}>Tirar Dados</button>
    </div>
  );
}

export default App;
