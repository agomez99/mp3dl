
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
        <title>DJHIC/DJFelon Free Style Mix Vol.1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div  className={styles.imgcont}>
      <Image src ={"/DJ.jpg"}         
          alt="Picture of the author"
          width={500}
          height={500}/>
          </div>
        <Player />
        <a href={'https://www.mboxdrive.com/mix.mp3'} download="DJHIC/DJFelon Free Style Mix Vol.1">  
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
