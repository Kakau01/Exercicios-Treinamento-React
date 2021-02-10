//Componente de Classe com estado.
//Alternar entre letra maiuscula e minuscula quando eu clicar no botao...
import './styles.css';

import React, { Component } from 'react';

//Interface typescript de propriedades do componente Toggle
//Recebe um filho e tem uma propriedade do estado Inicial que poderá ser upper ou lower
interface ToggleUpperLowerCaseProps {
    children: string;
    initialMode: 'upper'
    

}

//Interface que seta o estado da app
interface ToggleUpperLowerCaseState {
    mode: 'upper' | 'lower'
}


class ToggleUpperLowerCase extends Component<ToggleUpperLowerCaseProps, ToggleUpperLowerCaseState> {

    constructor(props: ToggleUpperLowerCaseProps) {
        super(props);
        //estado é setado para inicial, dependerá da propriedade que colocar 
        this.state = {
            mode: props.initialMode
        }
        this.toggle = this.toggle.bind(this);


    }

    toggle() {
        this.setState({
            mode: this.state.mode === 'upper' ? 'lower' : 'upper'

        })

    }

    render() {
        return (
            <div className="app-toggle">
                <h1> {this.state.mode === 'upper'
                    ? this.props.children.toUpperCase()
                    : this.props.children.toLocaleLowerCase()}
                </h1>
                <button onClick={this.toggle}>
                    {this.state.mode === 'upper' ? 'Lower' : 'Upper'}
                    
                </button>
            </div>
        )


    }
}

export default ToggleUpperLowerCase;


