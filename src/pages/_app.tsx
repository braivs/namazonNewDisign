import "../styles/index.scss";
import "../../node_modules/yet-another-react-lightbox/dist/styles.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
