import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.tile}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, maiores quisquam ab provident adipisci placeat totam similique odit hic. Optio ab quae porro esse id quisquam. Corporis voluptas unde quos.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eos facere possimus voluptatibus quidem officia molestias atque minima aperiam, veniam recusandae eum maiores, sit vitae rerum magnam facilis, quis excepturi?</p>
        <Link href="/ninjas"><a className={styles.btn}>Ninja Listing</a></Link>
      </div>
    </>
  )
}
