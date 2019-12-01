import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB as B } from './componentes/DoisComponentes'


const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        {/* <PrimeiroComponente valor="Bom dia!" /> */}
        <CompA valor="Olá eu sou A!" />
        <B valor="B na área!" />

    </div>
, elemento)