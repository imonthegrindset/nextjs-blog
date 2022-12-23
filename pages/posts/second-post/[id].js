
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(user => {
        return  {
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    const id = params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {props: {user: data}}
}

export default function NumberConstructor({user}) {
    console.log(user.id)
    return (
        <>
         <div className="text-2xl font-bold text-rose-700">{user.name}</div> 
         <h1>{user.email}</h1>
         <h2>{user.city}</h2>     
        </>

        
    )
}