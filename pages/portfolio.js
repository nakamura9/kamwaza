import Footer from "../components/footer"
import NavBar from "../components/nav"
import styles from '../styles/Portfolio.module.css'
import Card from '../components/portfolioCard'
import { useEffect, useState } from "react"
import Link from 'next/link'
import {motion} from 'framer-motion'


const Portfolio = props => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null)
    const [projects, setProjects] = useState([])
    

    useEffect(() => {
        fetch("/api/category/")
            .then(res => {
                res.json()
                .then(r => {
                    setCategories(r.items)
                })
            })

        fetch("/api/project/")
            .then(res => {
                res.json()
                .then(r => {
                    setProjects(r.items)
                })
            })
    }, [])

    useEffect(() => {
        if(!category) {
            fetch("/api/project/")
            .then(res => {
                res.json()
                .then(r => {
                    setProjects(r.items)
                })
            })
            return 
        }
        fetch(`/api/category/${category}`)
            .then(res => {
                res.json()
                .then(r => {
                    setProjects(r.items)
                })
            })
    }, [category])
    return (
        <main>
            <NavBar />
            <motion.h1 
                initial={{opacity: 0}}
                animate={{opacity: 0.15}}
                transition={{duration: 1}}
                className={styles.heading}
            >Our Work</motion.h1>
            <ul className={styles.buttons}>
            <li className={category == null ? styles.activeCategory: ""} onClick={() => setCategory(null)}>All</li>
                {categories.map(c => (
                    <li key={c.sys.id} className={c.sys.id == category ? styles.activeCategory: ""} onClick={() => setCategory(c.sys.id)}>{c.fields.name}</li>
                ))}
            </ul>
            <div className={styles.cards}>
                {projects.map(p => (
                    <Card 
                        key={p.sys.id}
                        img_url={p.fields.coverPicture.fields.file.url} 
                        url={`/project/${p.sys.id}/`} 
                        section={p.fields.category.fields.name} 
                        name={p.fields.title}
                        />    
                ))}
            </div>
            <Footer />
        </main>
    )
}

export default Portfolio