import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import {useState} from 'react'


const NavBar = props => {
    const [search, toggleSearch] = useState(false)
    const [searchText, setSearchText] = useState("")

    return (
        <>
            <nav className={styles.nav}>
            <ul>
                <li >
                    <a href="/">
                        <div className={styles.hero}>
                            <Image src="/sketch.png" height={40} width={40} />
                            <div><span className={styles.bold}>Memorage</span> Architecture</div>
                        </div>
                    </a>
                    
                </li>
                <li><a href="/">HOME</a></li>
                <li><a href="/portfolio">PORTFOLIO</a></li>
                <li><a href="/videos">VIDEOS</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
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