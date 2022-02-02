import styles from '../styles/hello.module.scss';

import Head from 'next/head';

export default function Hello() {
  return (
    <>
      <Head>
        <title>Hello World | ig.news</title>
      </Head>

      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </>
  )
}