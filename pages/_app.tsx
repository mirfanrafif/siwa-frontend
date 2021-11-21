import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutWrapper from '../components/wrapper/LayoutWrapper';
import { wrapper } from '../hooks/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default wrapper.withRedux(MyApp);