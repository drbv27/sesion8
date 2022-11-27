import React from 'react'

function ComponenteHijo(props) {
    return (
        <React.Fragment>
            <p>Hola soy el hijo</p>
            <button onClick={props.enviarPadre}> Enviar informacion al padre </button>
            <ul>
                {props.articulos.map(elm => <li key={elm}>{elm}</li>)}
            </ul>
        </React.Fragment>
    )
}

export default ComponenteHijo