import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"


import { faHome, faSearch, faFilter, faEllipsisV, faBars,
   faAngleLeft, faAngleRight, faShoppingCart, faHeart,
   faAt, faPhone, faQuestion, faList, faFile, faStar, faUser } from "@fortawesome/free-solid-svg-icons"

library.add(faHome, faSearch, faFilter, faBars, faEllipsisV, fab,
     faAngleLeft, faAngleRight, faHeart, faShoppingCart,
    faAt, faPhone, faQuestion, faList, faFile, faStar, faUser)

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
