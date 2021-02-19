
import React from 'react'
import ReactDOM from 'react-dom'
import 'react-jinke-music-player/assets/index.css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Player from './Player';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Button } from "shards-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Image src ={"/DJ.jpg"}         
          alt="Picture of the author"
          width={500}
          height={500}/>
        <Player />
        <a href={'https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-blog-4fe3a.appspot.com/o/mix.mp3?alt=media&token=d1748e8f-673e-4daf-87d7-1ad2c5fb9722'} download="DJHIC/DJFelon Free Style Mix Vol.1">  
      <Button theme="success"  size="lg">DOWNLOAD MP3</Button>
      </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Agdev 
        </a>
      </footer>
    </div>
  )
}
