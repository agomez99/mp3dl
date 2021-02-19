
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
        <meta property="og:url" content="https://freestylemix.vercel.app/"/>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Free Style Mix Vol.1"/>
        <meta property="og:description"
          content="Free Style Mix Vol.1"
        />
        <meta property="og:image" content="https://i.ibb.co/2KbHC1W/DJ.jpg"/>
      


        <meta property="fb:app_id" content="134816985125175" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free Style Mix Vol.1"/>
        <meta name="twitter:description" content="Free Style Mix Vol.1"/>
        <meta name="twitter:image" content="https://i.ibb.co/2KbHC1W/DJ.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>

      <main className={styles.main}>
      <div  className={styles.imgcont}>
      <Image src ={"/DJ.jpg"}         
          alt="Picture of the author"
          width={500}
          height={500}
          className={styles.pic}
          />
          </div>
        <Player />

      <a href='/mix.mp3' download><Button theme="success"  size="lg">DOWNLOAD MP3</Button>
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
