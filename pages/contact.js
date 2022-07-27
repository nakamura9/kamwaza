
import styles from '../styles/Contact.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'

export default function ContactUs() {
  return <main>
    <NavBar />
    <div className={styles.body}>
      
      <div className={styles.left}>
        <img src="/sample.jpeg" />
        <div className={styles.textCard}>
            <h4>Some Text</h4>
            <p>Thanks for visiting our site.</p>
            <h4>Other Text</h4>
            <p>We would like to hear from you.</p>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.form}>
            <h3>Leave us a message</h3>
            <input className={styles.input} type="text" placeholder='Name'/>
            <input className={styles.input} type="text" placeholder='email'/>
            <textarea className={styles.input} rows={4}>Your message</textarea>
            <Link className={styles.button}>Send Message</Link>
        </div>
      </div>    
    </div>
    <Footer />
  </main>
}
