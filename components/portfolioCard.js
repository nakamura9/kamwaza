import styles from '../styles/Components.module.css'

const Card = props => {
    return (
        <a href={props.url}>
            <div className={styles.card}>
                <img src={props.img_url} />
                <div className={styles.cardOverlay}>
                    <h5>{props.name}</h5>
                    <h6>{props.section}</h6>
                    <hr />
                </div>
            </div>
        </a>
        
    )
}

export default Card 