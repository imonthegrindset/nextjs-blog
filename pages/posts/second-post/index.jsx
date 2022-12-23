import Layout from '../../../components/layout'
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    return { props: { users: data } }
}

export default function SecondPost({ users }) {

    return (
        <>
            <Layout>
                <div className="red-700 font-5xl">This my second post bruh</div>
                {users.map(user => {
                    return <Link className='text-yellow-400' href={"second-post/" + `${user.id}`} >{user.name}</Link>
                })}
            </Layout>
        </>
    )
}




