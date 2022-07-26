import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Home() {
  return <main>
    <NavBar />
    <div className={styles.body}>
      <div className={styles.sidebar}>
      <img src="/blueprint.jpg" />
      </div>
      <div className={styles.imgContainer}>
      <img src="/sample.jpeg" />
      </div>
    </div>
    <div className={styles.overlay}>
      <h1>Sample Building</h1>
      <hr />
      <p>In this location</p>
      <a href="/portfolio">View Portfolio</a>
      <div>
        <ul>
          <li><FontAwesomeIcon icon={["fab", "instagram"]}/></li>
          <li><FontAwesomeIcon icon={["fab", "facebook"]}/></li>
          <li><FontAwesomeIcon icon={["fab", "whatsapp"]}/></li>
          <li><FontAwesomeIcon icon={["fab", "linkedin"]}/></li>
        </ul>
      </div>
    </div>
    <div className={styles.foot}>
      Copyright 2022 Memorage Architecture
    </div>
  </main>
}
