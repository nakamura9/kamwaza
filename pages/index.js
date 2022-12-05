import styles from '../styles/Home.module.css'
import NavBar from '../components/nav'


import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Grid } from  'react-loader-spinner'
import Featured from '../components/featured'



export default function Home() {
  const [current, setCurrent] = useState({})
  const [featured, setFeatured] = useState([])

  const cycleFeatured = (i) => {
    if(!(featured.length > 0)) {
      setTimeout(() => cycleFeatured(i), 5000)  
      return
    }
    
    const newIDX = i < featured.length - 1 ? i + 1 : 0
    setCurrent(featured[newIDX])
    
    
    setTimeout(() => cycleFeatured(newIDX), 5000)
  }

  useEffect(() => {
    fetch(`/api/featured/`)
      .then(res => {
          res.json()
          .then(r => {
              setFeatured(r.items)
          })
      })
  }, [])

  useEffect(() => {
    if(featured.length > 0) {
      setCurrent(featured[0])
      setTimeout(() => cycleFeatured(0), 5000)
    }
  }, [featured])

  return <main>
    <NavBar />
    {current.sys == undefined 
      ? <div className={styles.placeholder}>
          <Grid
              height="80"
              width="80"
              color="#000033"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
        </div>
          : <Featured {...current} />
    }
    <div className={styles.foot}>
      Copyright 2022 Memorage Architecture
    </div>
  </main>
}
