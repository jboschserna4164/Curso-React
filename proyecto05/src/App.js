import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [articulos, setArticulos] = useState([{
                      codigo: 1, 
                      descripcion: 'papas',
                      precio: 12.52
                   },{
                      codigo: 2, 
                      descripcion: 'naranjas',
                      precio: 21
                   },{
                      codigo: 3, 
                      descripcion: 'peras',
                      precio: 18.20
                   }])

  function eliminarUltimaFila() {
    if (articulos.length > 0) {
      const temp = Array.from(articulos); /* crear una copia del vector original llamando al método from */
      temp.pop();
      setArticulos(temp);
    }
  }

  function borrarFila(code) {
    const temp = articulos.filter((art) => art.codigo !== code); /* el método filter genera otro vector con todas las componentes que cumplen la condición que le pasamos en la función anónima */
    setArticulos(temp)
  }

  return(
    <div>
      <table border="1">
        <thead>
          <tr><th>Codigo</th><th>Descripcion</th><th>Precio</th></tr>
        </thead>
        <tbody>
          {articulos.map(art => (
            <tr key={art.codigo}>
              <td>{art.codigo}</td>
              <td>{art.descripcion}</td>
              <td>{art.precio}</td>
              <td><button onClick={() => borrarFila(art.codigo)}>Borrar</button></td>
            </tr>           
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default App;
