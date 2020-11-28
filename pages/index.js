import React, {useState} from 'react'
import api from '../services/api'
import md5 from 'md5'
import Link from 'next/link'

function Contador(){
    
    const [contador, setContador] = useState(1)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    async function getApi(){
        await api.post(`login.php`, {
            username: login,
            password: md5(password)
        }).then(
            async res => {await alert(res.data)},
            async res => {await alert(res.data)}
        )
    }
    

    return (
        <div>
            <h4>{contador}</h4>
            <input type='text' name='login' id='login' value={login} onChange={event => setLogin(event.target.value)} placeholder='Login' />
            <input type='password' name='login' value={password} onChange={event => setPassword(event.target.value)} placeholder='Password' />
            <button onClick={getApi}>Contato com a API</button>    
        </div>
    )
}

function Home(){
    return (
        <div>
            <h1>Olá Next JS</h1>
            <Contador />
            <Link href="/paginadois"><button>Página dois</button></Link>
        </div>
    )
}

export default Home
