import React from 'react'
import ComponenteHijo from './componenteHijo'


class ComponentePadre extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            articulos : ['chocolate', 'mani']
        }
        console.log('soy el constructor')

        this.eliminarProducto = this.eliminarProducto.bind(this)
    }

    enviarPadre() {
        console.log('aqui estoy')
    }

    componentDidMount(){
        console.log('el componente fue montado')
    }

    componentDidUpdate(){
        console.log('el componente fue actualizado')
    }

    eliminarProducto(){
        let temp = this.state.articulos
        temp.pop()
        this.setState({
            articulos: temp
        })
    }

    render() {
        console.log('soy el render')
        return (
            <div>
                <header>
                    <h1>Soy el padre</h1>
                </header>
                <ComponenteHijo enviarPadre={this.enviarPadre} articulos={this.state.articulos} />
                <button onClick={this.eliminarProducto} >Eliminar producto</button>
            </div>
        )
    }
}

export default ComponentePadre