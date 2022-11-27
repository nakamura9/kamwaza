import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Link from 'next/link'


const Footer = props => {
    const [categories, setCategories] = useState([])
    const [gallery, setGallery] = useState([])
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
                setGallery(r.items.slice(0, 8))
            })
        })
    }, [])

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.social}>
                    <div className={styles.hero}>
                        <Image src="/logo.jpg" height={60} width={180} />
                        {/* <div><span className={styles.bold}>Memorage</span> Architecture</div> */}
                    </div>
                    <ul>
                        <li><FontAwesomeIcon size='2x' icon={["fab", "instagram"]}/></li>
                        <li><FontAwesomeIcon size='2x' icon={["fab", "facebook"]}/></li>
                        <li><FontAwesomeIcon size='2x' icon={["fab", "whatsapp"]}/></li>
                        <li><FontAwesomeIcon size='2x' icon={["fab", "linkedin"]}/></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><span>Telephone: </span>+263 772 778 566</li>
                        <li><span>Cellphone: </span>+263 772 778 566</li>
                        <li><span>Email: </span>memoragearchitecture@gmail.com</li>
                    </ul>
                    <h4>Address</h4>
                    <p style={{marginLeft: "3rem"}}>1826 Area D <br /> Bluffhill <br />  Harare <br /> Zimbabwe</p>
                </div>
                <div>
                    <h4>Work</h4>
                    <ul>
                        {categories.map(c => <li key={c.sys.id} ><Link href="/portfolio">{c.fields.name}</Link></li>)}
                    </ul>
                </div>
                <div>
                    <h4>Gallery</h4>
                    <div className={styles.gallery}>
                        {gallery.map(g => (
                            <div key={g.sys.id}>
                                <Link href={`/project/${g.sys.id}/`}>
                                    <img src={g.fields.coverPicture.fields.file.url}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}  

export default Footer