import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className='text-xl bg-red-300 dark:bg-slate-600 text-black  dark:text-white h-[100vh]'>hello World</h1>
      <p></p>
    </div>
  )
}
