import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'


const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <MultiElementos />
    </div>
, elemento)