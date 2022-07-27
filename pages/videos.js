
import styles from '../styles/Videos.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Videos() {
  const videos = [
    {
        url: '/sample.jpeg',
        title: "Sample Video"
    },
    {
        url: '/sample.jpeg',
        title: "Sample Video"
    },
    {
        url: '/sample.jpeg',
        title: "Sample Video"
    },
  ]
  return <main>
    <NavBar />
    <div className={styles.body}>
        {videos.map((video, i) => (
            <div key={i} className={styles.video}>
                <img src={video.url}/>
                <h4>{video.title}</h4>
            </div>
        ))}
    </div>
    <Footer />
  </main>
}
