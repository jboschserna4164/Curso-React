import './Dado.css';

function Dado(propiedades) {
    return(
        <div className='dado-recuadro'>{propiedades.valor}</div>
    );
}

export default Dado;