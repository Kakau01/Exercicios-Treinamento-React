//Componente Principal, que renderizará todos os outros componentes...
import React from 'react';

import Header from '.././components/Header';
import ToggleUpperLowerCase from '.././components/ToggleUpperLowerCase';


const App = () => {


    return(
        <div>
            <Header titulo="Treinamento React da Accenture!"/>
            <ToggleUpperLowerCase initialMode='upper'>
                Palavra
            </ToggleUpperLowerCase>
            
        </div>
    )
}

export default App;