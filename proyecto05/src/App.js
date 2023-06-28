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
      const temporal = Array.from(articulos); /* crear una copia del vector original llamando al método from */
      temporal.pop();
      setArticulos(temporal)
    }
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
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar ultima fila</button>
    </div>

  );
}

export default App;
