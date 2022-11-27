import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import { faHome, faSearch, faFilter, faEllipsisV, faBars,
   faAngleLeft, faAngleRight, faShoppingCart, faHeart,
   faAt, faPhone, faQuestion, faList, faFile, faStar, faUser, faLocation, faMobile, faBookOpen } from "@fortawesome/free-solid-svg-icons"

library.add(faHome, faSearch, faFilter, faBars, faEllipsisV, fab,
     faAngleLeft, faAngleRight, faHeart, faShoppingCart,
    faAt, faPhone, faQuestion, faList, faFile, faStar, faUser, faLocation, faMobile, faBookOpen)

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
