import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'



const Featured = props => {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                <img src="/blueprint.jpg" />
                </div>
                <div className={styles.imgContainer}>
                    <motion.img 
                        src={props.fields.coverPicture.fields.file.url} 
                        key={props.fields.coverPicture.fields.file.url} 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    />
                </div>
            </div>
            <div className={styles.overlay}>
                <h1>
                    <motion.span 
                        key={props.fields.title}
                        initial={{left: '-100vw'}}
                        animate={{left: 0}}
                        transition={{duration: 1}}
                    >{props.fields.title}</motion.span>
                </h1>
                <hr />
                
                
                <motion.div
                    key={props.fields.project}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                >
                    <p>{props.fields.project}, {props.fields.location}, {props.fields.year}</p>
                    <Link href="/portfolio">View Portfolio</Link>
                    <ul >
                        <li><FontAwesomeIcon icon={["fab", "instagram"]}/></li>
                        <li><FontAwesomeIcon icon={["fab", "facebook"]}/></li>
                        <li><FontAwesomeIcon icon={["fab", "whatsapp"]}/></li>
                        <li><FontAwesomeIcon icon={["fab", "linkedin"]}/></li>
                    </ul>
                </motion.div>
            </div>
        </>
    )
}


export default Featured