import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'

const NavBar = props => {
    const [search, toggleSearch] = useState(false)
    const [searchText, setSearchText] = useState("")

    return (
        <>
            <nav className={styles.nav}>
            <ul>
                <li >
                    <Link href="/">
                        <div className={styles.hero}>
                            <Image src="/sketch.png" height={40} width={40} />
                            <div><span className={styles.bold}>Memorage</span> Architecture</div>
                        </div>
                    </Link>
                    
                </li>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/portfolio">PORTFOLIO</Link></li>
                <li><Link href="/videos">VIDEOS</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
                <li>
                    <FontAwesomeIcon 
                        icon="search" 
                        onClick={() => toggleSearch(!search)}
                    />
                </li>
                <li>
                    <FontAwesomeIcon 
                        icon="bars" 
                    />
                </li>
            </ul>
        </nav>
        <div className={styles.searchBox} style={{display: search ? 'flex': 'none'}}>
            <div>
                <input type="text"/>
                <FontAwesomeIcon 
                    icon="search" 
                    size='2x'
                    onClick={() => toggleSearch(!search)}
                />
            </div>
        </div>
        </>
        
    )
}

export default NavBar