import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import A, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'


const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <FamiliaSilva />
        {/* <A valor="Olá eu sou A!" /> */}
        {/* <B valor="B na área!" /> */}
    </div>
, elemento)