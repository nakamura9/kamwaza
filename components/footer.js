import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'


const Footer = props => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.social}>
                    <div className={styles.hero}>
                        <Image src="/sketch.png" height={40} width={40} />
                        <div><span className={styles.bold}>Memorage</span> Architecture</div>
                    </div>
                    <ul>
                        <li><FontAwesomeIcon icon={["fab", "instagram"]}/></li>
                        <li><FontAwesomeIcon icon={["fab", "facebook"]}/></li>
                        <li><FontAwesomeIcon icon={["fab", "whatsapp"]}/></li>
                        <li><FontAwesomeIcon icon={["fab", "linkedin"]}/></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><span>Telephone:</span>000</li>
                        <li><span>Cellphone:</span>000</li>
                        <li><span>Email:</span>@</li>
                    </ul>
                    <p>Address</p>
                </div>
                <div>
                    <h4>Work</h4>
                    <ul>
                        <li>Education</li>
                        <li>Residential</li>
                        <li>Transport</li>
                    </ul>
                </div>
                <div>
                    <h4>Gallery</h4>
                    <div>
                        <div>
                            <img src=""/>
                            <img src=""/>
                            <img src=""/>
                        </div>
                        <div>
                            <img src=""/>
                            <img src=""/>
                            <img src=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}  

export default Footer