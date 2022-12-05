import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBar from "../../components/nav"
import Footer from "../../components/footer"
import styles from "../../styles/Portfolio.module.css"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Grid } from  'react-loader-spinner'


const Detail = props => {
    const [animated, setAnimated] = useState(false)
    const [cards, setCards] = useState([])
    const [classes, setClasses] = useState([])
    const [after, setAfter] = useState(0)
    const [current, setCurrent] = useState(1)
    const [before, setBefore] = useState(2)
    const [data, setData] = useState({})
    const router = useRouter()

    function updateClassList() {
        
        const classList = new Array(classes.length).fill("")
        classList[after] = styles.after
        classList[current] = styles.current
        classList[before] = styles.before
        setClasses(classList)
    }
    useEffect(() => {
        fetch(`/api/project/${router.query.id}/`)
            .then(res => {
                res.json()
                .then(r => {
                   setData(r)
                   setCards(r.fields.projectImages)
                   setClasses(new Array(r.fields.projectImages.length).fill(""))
                   updateClassList()
                })
            })
    }, [])
    
    
    

    const increment = () => {
        if(cards.length < 3) return
        function incrementClassState(value, setter) {
            if(value < cards.length - 1) {
                setter(value + 1)
            } else {
                setter(0)
            }
       }
        incrementClassState(after, setAfter)
        incrementClassState(current, setCurrent)
        incrementClassState(before, setBefore)
        updateClassList()
       
    }
    const decrement =() => {
        
        function decrementClassState(value, setter) {
            if(value > 0) {
                setter(value - 1)
            } else {
                setter(cards.length - 1)
            }
       }

        decrementClassState(after, setAfter)
        decrementClassState(current, setCurrent)
        decrementClassState(before, setBefore)
        updateClassList()
    }

    return (
        <main>
            <NavBar />
            {data.fields
            ? <article>
                <div className={styles.carousel}>
                    <div className={styles.control} onClick={increment}>
                        <FontAwesomeIcon icon="angle-left" size="2x" />
                    </div>
                        {cards.map((pImg, idx) => (
                            <div key={idx} className={`${styles.card} ${classes[idx]}`}>
                                <img src={pImg.fields.file.url} alt={pImg.fields.title}/>
                            </div> )
                        )}
                    
                    <div className={styles.control + " " + styles.controlRight} onClick={decrement}>
                        <FontAwesomeIcon icon="angle-right" size="2x" />
                    </div>
                </div>
                <div className={styles.projectText}>
                    <div className={styles.description}>
                        <h4>{data.fields.title}</h4>
                        <p><b>Project</b>: {data.fields.project}</p>
                        <p><b>Location</b>: {data.fields.location}</p>
                        <p><b>Year</b>: {data.fields.year}</p>
                        <p><b>Area</b>: {data.fields.area}</p>
                    </div>
                    <div className={styles.prose} dangerouslySetInnerHTML={{__html: documentToHtmlString(data.fields.description)}}>
                    </div>
                </div>
            </article>
            : <div className={styles.placeholder}>
                <Grid
                    height="80"
                    width="80"
                    color="#000033"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
            </div>
            }

            <div className={styles.comment} >
                <form action="https://formspree.io/f/xqkjrknw" method="post">
                    <h2>Leave A Reply</h2>
                    <br />
                    <div className={styles.inputs}>
                        <input 
                            type="text" 
                            placeholder="Name"
                            id="name"
                            name="name"
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <br />
                    <textarea 
                        defaultValue="Your comment" 
                        rows={4}
                        id="comment"
                        name="comment"
                    >
                    </textarea>
                    <br />
                    <button type="submit">Post Comment</button>
                </form>
            </div>

            <Footer />
        </main>
    )
}

export default Detail