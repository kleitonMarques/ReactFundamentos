import React from 'react'
import { link } from 'fs'



export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}