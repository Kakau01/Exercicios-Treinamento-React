//Componente Principal, que renderizará todos os outros componentes...
import './styles.css';

import React from 'react';

import Header from '.././components/Header';
import ToggleUpperLowerCase from '.././components/ToggleUpperLowerCase';
import Clock from '../components/Clock';



const App = () => {

    let date = new Date();
    let horas = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const horario = [horas, minutes, seconds].join(':');


    return (
        <div >
            <Header titulo="Treinamento React da Accenture!" />
            <div id="app-container">
                <ToggleUpperLowerCase initialMode='upper'>
                    Palavra
            </ToggleUpperLowerCase>
                <Clock initialDate={horario} />
            </div>


        </div>
    )
}

export default App;