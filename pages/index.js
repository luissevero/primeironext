import React, {useState} from 'react'

function Contador(){
    
    const [contador, setContador] = useState(1)

    function adicionaContador(){
        setContador(contador + 1)
    }

    return (
        <div>
            <h4>{contador}</h4>
            <button onClick={adicionaContador}>Contador</button>    
        </div>
    )
}

function Home(){
    return (
        <div>
            <h1>Olá Next JS</h1>
            <Contador />
        </div>
    )
}

export default Home
