import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import A, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hooks from './componentes/Hook'


const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <Hooks />
        {/* <Contador numeroInicial={100} /> */}
        {/* <ComponenteClasse valor="" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Mariana" />
        </Familia>        */}
        {/* <FamiliaSilva /> */}
        {/* <A valor="Olá eu sou A!" /> */}
        {/* <B valor="B na área!" /> */}
    </div>
, elemento)