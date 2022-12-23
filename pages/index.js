import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import useSWR from 'swr'
import { useRef, useEffect, useState} from 'react'
import loadNumber from '../lib/function';

export default function Home({ user }) {
  const [name, setName] = useState("My name is...")
  const [load, setLoad] = useState(false);

  const div = useRef(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Read <Link href="posts/first-post">my first post</Link>
        </h1>
        <h1>Read <Link href="posts/second-post">my second post</Link></h1>
        <button onClick={() => {
          setName(user)
          setLoad(true);
        }}>Press me</button>
        <div ref={div}>{name}</div>
        {load ? (
          <Profile />
        ) : (
          <div></div>
        )}
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const name = await loadNumber();
  
  return { props: {user: name.name}}
}

const fetchy =  (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/api/hello', fetchy);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div className='text-6xl text-green-500'>{data.text}!</div>;
}