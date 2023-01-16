import "@/styles/globals.css";
import { WordProvider } from "../WordsContext";
import NameProvider from "../NameContext";
export default function App({ Component, pageProps }) {
  return (
    <WordProvider>
      <NameProvider>
        <Component {...pageProps} />
      </NameProvider>
    </WordProvider>
  );
}
