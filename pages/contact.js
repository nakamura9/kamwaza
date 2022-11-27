
import styles from '../styles/Contact.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'

export default function ContactUs() {
  return <main>
    <NavBar />
    <div className={styles.body}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.left}>
        <img src="/sample.jpeg" />
        <div className={styles.textCard}>
            <h4><FontAwesomeIcon icon={["fas", "book-open"]}/> Contacts</h4>
            <ul>
                <li><FontAwesomeIcon icon={["fas", "phone"]}/> +263 772 778 566</li>
                <li><FontAwesomeIcon icon={["fas", "mobile"]}/> +263 772 778 566</li>
                <li><FontAwesomeIcon icon={["fas", "at"]}/> memoragearchitecture@gmail.com</li>
            </ul>
            <h4><FontAwesomeIcon icon={["fas", "location"]}/> Address</h4>
            <p>1826 Area D <br /> Bluffhill <br />  Harare <br /> Zimbabwe</p>
        </div>
      </div>
      <div className={styles.right}>
        
        <div className={styles.form}>
            <h3>Leave us a message</h3>
            <input className={styles.input} type="text" placeholder='Name'/>
            <input className={styles.input} type="text" placeholder='Email'/>
            <textarea className={styles.input} rows={4}>Your message</textarea>
            <div className={styles.button}><Link href="/" >Send Message</Link></div>
        </div>
      </div>    
    </div>
    <Footer />
  </main>
}
