
import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Player from './Player';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Col,Button } from "shards-react";
import GoogleAnalytics from "./googleAnalytics.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook
  } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DJHIC/DJFelon Free-Style Mix Vol.1</title>
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
      <GoogleAnalytics />
      <main className={styles.main}>
        <div className={styles.imgcont}>
          <Image src={"/DJ.jpg"}
            alt="Picture of the author"
            width={500}
            height={500}
            className={styles.pic}
          />

          
        </div>
        <div className={styles.imgcont2}>
 
          <Image src={"/Q.png"}
            alt="QCCode"
            width={120}
            height={120} />
        </div>

      <a href='http://sendanywhe.re/5M1Q3XZ5' download>
      <Button theme="success"  size="lg">DOWNLOAD MP3</Button>
      </a>

      <div  className={styles.imgcont3}>
          <a href="https://www.facebook.com/DjFelon210" >
            <FontAwesomeIcon icon={faFacebook} style={{height:"100px"}}/>
          </a>
          <a href="https://www.facebook.com/officialdjhic"  >
            <FontAwesomeIcon icon={faFacebook} style={{height:"100px"}}/>
          </a>
          </div>
          <Col style={{textAlign:"center", paddingTop:"10px"}}>
            <h3>DJ Felon | DJ HI-C</h3>
          </Col>
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
