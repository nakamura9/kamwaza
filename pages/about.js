
import styles from '../styles/About.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function About() {
  return <main>
    <NavBar />
    <div className={styles.body}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.sidebar}>
        <img src="/blueprint.jpg" />
      </div>
    <div className={styles.floatingCard}>

    </div>
    <div className={styles.textCard}>
        <h4>Some Text</h4>
        <p>This is something about a business.</p>
        <h4>Other Text</h4>
        <p>Other things about the same business</p>
    </div>
    </div>
    <Footer />
  </main>
}
