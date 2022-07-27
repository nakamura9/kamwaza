import styles from '../styles/Components.module.css'
import Link from 'next/link'


const Card = props => {
    return (
        <Link href={props.url}>
            <div className={styles.card}>
                <img src={props.img_url} />
                <div className={styles.cardOverlay}>
                    <h5>{props.name}</h5>
                    <h6>{props.section}</h6>
                    <hr />
                </div>
            </div>
        </Link>
        
    )
}

export default Card 