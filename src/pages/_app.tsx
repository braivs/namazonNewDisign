import "../styles/index.scss";
import "../../node_modules/yet-another-react-lightbox/dist/styles.css";
import {FC} from "react"

type AppProps = {
  Component: FC
  pageProps: any
}

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
