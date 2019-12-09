import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import A, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'


const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            {/* <Membro nome="Mariana" /> */}
        </Familia>       
        {/* <FamiliaSilva /> */}
        {/* <A valor="Olá eu sou A!" /> */}
        {/* <B valor="B na área!" /> */}
    </div>
, elemento)