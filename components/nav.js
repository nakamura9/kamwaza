import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

const NavBar = props => {
    const [search, toggleSearch] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [showNav, toggleNav] = useState(false)
    const [searchResults, setSEarchResults] = useState([])
    
    useEffect(() => {
        if(searchText < 3) return 
        fetch(`/api/search/${searchText}`)
            .then(res => {
                res.json()
                    .then(r => {
                        console.log(r.items)
                        setSEarchResults(r.items)
                    })
            })
    }, [searchText])

    return (
        <>
            <nav className={styles.nav}>
                <Link href="/">
                    <div className={styles.hero}>
                        <Image src="/logo.jpg" height={60} width={180} />
                        
                    </div>
                </Link>
                <div className={styles.links} style={{left: showNav ? "0px" : "-80vw"}}>
                    <div className={styles.mobileShow}>
                        <div className={styles.hero}>
                            <Image src="/sketch.png" height={40} width={40} />
                            <div><span className={styles.bold}>Memorage</span> Architecture</div>
                        </div>
                    </div>
                    <ul>
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
                        
                    </ul>
                </div>
                <div 
                    className={styles.mobileNav} 
                    onClick={() => toggleNav(!showNav)}
                >
                    <FontAwesomeIcon 
                        icon="bars" 
                    />
                </div>
            </nav>
            <motion.div 
                className={styles.searchBox} 
                style={{display: search ? 'block': 'none'}}
                key={search}
                initial={{backgroundColor: "rgba(0,0,0,0)"}}
                animate={{backgroundColor: "rgba(0,0,0,0.7)"}}

            >
                
                <div className={styles.searchResults}>
                    <div className={styles.searchInputs}>
                        <input 
                            type="text"
                            value={searchText}
                            onInput={evt => setSearchText(evt.target.value) } />
                        <FontAwesomeIcon 
                            icon="search" 
                            size='2x'
                            onClick={() => toggleSearch(!search)}
                        />
                    </div>
                    {searchResults.map(r => (
                        <div 
                            key={r.sys.id} 
                            className={styles.searchResult}
                        >
                            <img src={r.fields.coverPicture.fields.file.url} />
                            <div>
                                <Link href={`/project/${r.sys.id}/`}><h2>{r.fields.title}</h2></Link>
                                <hr />
                                <p>{r.fields.project}, {r.fields.location}, {r.fields.year}</p>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </motion.div>
            
        </>
        
    )
}

export default NavBar