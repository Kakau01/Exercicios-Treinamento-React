//Componente Principal, que renderizará todos os outros componentes...
import React from 'react';

import Header from '.././components/Header';

const App = () => {

    return(
        <div>
            <Header titulo="Treinamento React da Accenture!"/>
        </div>
    )
}

export default App;