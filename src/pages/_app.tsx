import "../styles/index.scss";
import "../../node_modules/yet-another-react-lightbox/dist/styles.css";
import {FC} from "react"
import {Provider} from "react-redux"
import {store} from "@/app/store/store"
import { config } from '@fortawesome/fontawesome-svg-core'; // fix for fontawesome big size issue on first start
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false;

type AppProps = {
  Component: FC
  pageProps: any
}

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }: AppProps) {
  return  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

//todo: setup pagination
//todo: when girl or video element is selected, should be video or girls category active
//todo: remove plus symbol from menu
//todo: make menu same high for girls/videos & contact us. Remove no need styles from _breadcrumb.scss (check)
//todo: change main app icon

//todo v2: fix typescript errors on dynamic imports, but links is correct
//todo v2: install and setup new 'wowjs' analog
//todo v2: integrate shop to the app
//todo v2: not full width of image on