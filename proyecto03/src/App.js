import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={calcularSuma}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function calcularSuma(e) {
  e.preventDefault();  /* detiene el envío de datos al servidor llamando a preventDefault  |  evitar que se realice la accion por defecto del evento submit(que es enviar los datos a un servidor) */
  const v1=parseInt(e.target.valor1.value, 10);
  const v2=parseInt(e.target.valor2.value, 10);
  const suma=v1+v2;
  alert('La suma es: '+suma);
}

export default App;
