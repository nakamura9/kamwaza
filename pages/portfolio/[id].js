import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from "../../components/nav"
import Footer from "../../components/footer"
import styles from "../../styles/Portfolio.module.css"
import { useEffect, useState } from "react"


const Detail = props => {
    const [animated, setAnimated] = useState(false)
    const cards = [
        {url: '/sample.jpeg'},
        {url: '/blueprint.jpg'},
        {url: '/sample.jpeg'},
        {url: '/blueprint.jpg'},
        {url: '/sample.jpeg'},
        {url: '/blueprint.jpg'},
        {url: '/sample.jpeg'}
    ]
    
    const [visible, setVisible] = useState([])
    const increment =() => {
        if(visible.length < cards.length){
            const copy = [...visible]
            copy.unshift(cards[visible.length])
            setVisible(copy)
        }
    }
    const decrement =() => {
        if(visible.length > 0) {
            const copy = [...visible]
            copy.shift()
            setVisible(copy)
        }
    }

    const idxMap = [
        styles.rightCard,
        styles.centerCard,
        styles.leftCard,
    ]

    return (
        <main>
            <NavBar />
            <div className={styles.carousel}>
                <div className={styles.control} onClick={decrement}>
                    <FontAwesomeIcon icon="angle-left" size="2x" />
                </div>
                {visible.map((card, idx) => <div key={idx} className={idxMap[idx % 3]}>
                        <img src={card.url} />
                        </div> 
                    )}
                
                <div className={styles.control + " " + styles.controlRight} onClick={increment}>
                    <FontAwesomeIcon icon="angle-right" size="2x" />
                </div>
            </div>
            <div className={styles.description}>
                <h4>{props.name}Sample Name</h4>
                <p><b>Project</b> {props.project}Test Project</p>
                <p><b>Location</b> {props.location}Somewhere, Harare</p>
                <p><b>Year</b> {props.year} 2020</p>
                <p><b>Area</b> {props.area} 200sqm</p>
            </div>
            <div></div>
            <Footer />
        </main>
    )
}

export default Detail