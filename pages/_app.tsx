import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutWrapper from '../components/wrapper/LayoutWrapper';
import { ContextWrapper } from '../utils/context/ContextWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ContextWrapper>
  )
}

export default MyApp
