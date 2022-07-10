import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {store, StoreProvider} from '../mobx/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
