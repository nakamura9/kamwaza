import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

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
      <h1 data-aos="fade-left">Sample Building</h1>
      <hr />
      <p>In this location</p>
      <Link href="/portfolio">View Portfolio</Link>
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
