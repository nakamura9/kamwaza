import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import { useEffect } from "react"
import styles from '../styles/Home.module.css'
import AOS from 'aos'


const Featured = props => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                <img src="/blueprint.jpg" />
                </div>
                <div className={styles.imgContainer}>
                <img src={props.fields.coverPicture.fields.file.url} />
                </div>
            </div>
            <div className={styles.overlay}>
                <h1 data-aos="fade-left">{props.fields.title}</h1>
                <hr />
                <p>{props.fields.project}, {props.fields.location}, {props.fields.year}</p>
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
        </>
    )
}


export default Featured