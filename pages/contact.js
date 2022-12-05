
import styles from "../styles/Contact.module.css"
import NavBar from "../components/nav"
import Footer from "../components/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { motion } from "framer-motion"
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  // const [state, handleSubmit] = useForm("mdojqobw");
  
  return <main>
    <NavBar />
    <div className={styles.body}>
      <motion.h2 
        initial={{opacity: 0}}
        animate={{opacity: 0.15}}
        transition={{duration: 1}}
        className={styles.title}
      >Contact Us</motion.h2>
      <div className={styles.left}>
        <img src="/sample.jpeg" />
        <motion.div 
          className={styles.textCard}
          initial={{left: "-100vw"}}
          animate={{left: "30%"}}
          transition={{duration: 1.5}}
        >
            <h4><FontAwesomeIcon icon={["fas", "book-open"]}/> Contacts</h4>
            <ul>
                <li><FontAwesomeIcon icon={["fas", "phone"]}/> +263 772 778 566</li>
                <li><FontAwesomeIcon icon={["fas", "mobile"]}/> +263 772 778 566</li>
                <li><FontAwesomeIcon icon={["fas", "at"]}/> memoragearchitecture@gmail.com</li>
            </ul>
            <h4><FontAwesomeIcon icon={["fas", "location"]}/> Address</h4>
            <p>1826 Meadow Lane <br /> Area D<br />New Bluffhill <br />  Harare</p>
        </motion.div>
      </div>
      <div className={styles.right}>
        
        <div className={styles.form}>
            <form action="https://formspree.io/f/mdojqobw"  method="POST">
              <h3>Leave us a message</h3>
              <input 
                className={styles.input} 
                type="text" 
                placeholder="Name"
                id="name"
                name="name"
              />
              <input 
                className={styles.input}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
              />
              {/* <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              /> */}
              <textarea 
                className={styles.input} 
                rows={4}
                id="message"
                name="message"
              >Your message</textarea>
              {/* <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              /> */}
              <button 
                type="submit" 
                className={styles.button} 
                
              >Send Message</button>
            </form>
        </div>
      </div>    
    </div>
    <Footer />
  </main>
}
