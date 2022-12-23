import Layout from '../../components/layout'
export default function SecondPost({ numbers }) {


    return (
        <>
            <Layout>
                <div className="red-700 font-5xl">This my second post bruh</div>
                {numbers.map(num => {
                    return <div className='text-yellow-400'>{num}</div>
                })}
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const numbers = await getNumbers()
    console.log(numbers)

    return { props: { numbers } }
}

async function getNumbers() {
    const res = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5')
    const data = res.json()
    return data
}

