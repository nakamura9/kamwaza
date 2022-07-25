import Footer from "../../components/footer"
import NavBar from "../../components/nav"
import styles from '../../styles/Portfolio.module.css'
import Card from '../../components/portfolioCard'

const Portfolio = props => {
    return (
        <main>
            <NavBar />
            <h1 className={styles.heading}>Our Work</h1>
            <ul className={styles.buttons}>
                <li>All</li>
                <li>Education</li>
                <li>Residential</li>
                <li>Transport</li>
            </ul>
            <div className={styles.cards}>
                <Card 
                    img_url="/sample.jpeg" 
                    url="/portfolio/1/" 
                    section="residential" 
                    name="Some place"
                     />
                <Card img_url="/sample.jpeg" url="/portfolio/2/" section="residential" name="Some place" />
                <Card img_url="/sample.jpeg" url="/portfolio/3/" section="residential" name="Some place" />
                <Card img_url="/sample.jpeg" url="/portfolio/4/" section="residential" name="Some place" />
            </div>
            <Footer />
        </main>
    )
}

export default Portfolio