
import styles from '../styles/About.module.css'
import NavBar from '../components/nav'
import Footer from '../components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from 'next/head'
import {motion} from 'framer-motion'


export default function About() {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap" rel="stylesheet" />
    </Head>
    <main>
    <NavBar />
    <div className={styles.body}>
      <motion.h2 
        className={styles.title}
        initial={{opacity: 0}}
        animate={{opacity: 0.15}}
        transition={{duration: 1}}
      >About</motion.h2>
      <div className={styles.sidebar}>
        <img src="/blueprint.jpg" />
      </div>
    <motion.div 
      initial={{left: '-100vw'}}
      animate={{left: '10vw'}}
      transition={{duration: 1.5}}
      className={styles.floatingCard}
    >
      <h3>The Team</h3>
      <p><b>Mordecai Kamwaza</b> is a professional architect who has been practicing architecture in the
      Zimbabwean built environment for the past fifteen (15) years. He is the principal architect
      of Memorage Architecture. He was trained locally at the National University of Science
      and Technology. He&apos;s a former design studio lecturer from the same institution. This
      Background has given him the drive to envisage and grow well-conceived, sustainable
      Architectural solutions for the Zimbabwean setting. He has experience in the design and
      Construction of a wide range of building types ranging from retail, commercial,
      Institutional, educational, industrial, specialized research facilities to multi-faceted
      Residential types</p>
      <p>
      <b>Mr Anymore Sombi</b> is a graduate from the National University of Science and Technology ,
      Zimbabwe. He has six years experience in the design of concept formulated buildings. He&apos;s
      Worked in Namibia and comes with valuable regional experience.
      </p>
      <p>
        <b>Mr Kelvin Mukucha</b> is a graduate from the National University of Science and Technology ,
        Zimbabwe. He two years experience. He is a hands on project coordinator and specialises in
        custom made interior and exterior designs
      </p>
    </motion.div>
    <div className={styles.textCard}>
        <h4>Principal&apos;s Statement</h4>
        <p> In This Ever Changing Global Sphere, Change And Development Characterize The Mainstay Of
        Progressive Peoples Lives. The Quest To Survive, Live And Enjoy Life, Is Often Perceived By
        What We See. We Visualise Ourselves As Becoming Ever Greater Than Who We Are Today. As
        We Strive For Greater Heights, We Leave Remnants That Will Always Remind Us Of Where We
        Have Come From, And Thus, Who We Are. More Often Than Not, We Want These Reminders To
        Be Visible, Distinct And Memorable.</p>
        
        <p>We At Memorage Architecture Strive To Capture Those Dreams, Visions And Memories In The
        Built Form. We Specialise In Custom Made Architectural Gems That Will Forever &quot;Freeze&quot; In
        Your Memory. Our Innovative Minds Are At Your Disposal To Capture What We Believe Is...
        <span>&quot;Creating Memoirs&quot;</span>
        </p>
        
    </div>
    </div>
    <Footer />
  </main>
  </>
}
