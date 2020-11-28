import Link from 'next/link'

function PaginaDois(){
    return (
        <div>
            <h2>Página dois</h2>
            <Link href="/"><button className='btn btn-primary'>Voltar para a Home</button></Link>
        </div>
    )
}

export default PaginaDois