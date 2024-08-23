import "../styles/index.scss";
import "../../node_modules/yet-another-react-lightbox/dist/styles.css";
import {FC} from "react"
import {Provider} from "react-redux"
import {store} from "@/app/store/store"

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

//todo: fix blinking while video & girls 'is loading'