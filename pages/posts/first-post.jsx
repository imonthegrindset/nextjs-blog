import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First post</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />

                <Image
                    src="/images/smiley.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name" />

                <h1>First Post</h1>
                <h2><Link href="/">Back Home</Link>
                </h2>
            </Layout>
        </>
    )
}