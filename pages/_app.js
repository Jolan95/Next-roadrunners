import '../styles/globals.css';
import { Html } from 'next/document';
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }