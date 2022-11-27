
import styles from '../styles/Videos.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';

export default function Videos() {

  const [videos, setVideos] = useState([])

  const opts = {
    height: screen.width > 720 ?  '320': 180,
    width: screen.width > 720 ? '640' : '320',
  };

  useEffect(() => {
    fetch("/api/video/")
      .then(res => {
          res.json()
          .then(r => {
              setVideos(r.items)
          })
      })
  }, [])

  return <main>
    <NavBar />
    <div className={styles.body}>
        {videos.map((video, i) => (
            <div key={i} className={styles.video}>
              <YouTube videoId={video.fields.link} opts={opts}/>
              <h4>{video.fields.title}</h4>
            </div>
        ))}
    </div>
    <Footer />
  </main>
}