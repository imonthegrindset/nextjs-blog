import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import useSWR from 'swr'

//getStaticProps 
//getServerSideProps for data that changes at every request (AI prompts)

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

// export async function getStaticProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

export default function Home({ allPostsData }) {
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
      </main>
    </div>
  )
}

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}