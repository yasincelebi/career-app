import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, client } from '../src/api/apolloServer'
import Layout from '../components/shared/Layout/Layout'
import Header from '../components/shared/Header/Header'

import UserProvider from '../src/context/UserContext/UserProvider'
import { LoadingProvider } from '../src/context/LoadingContext/LoadingProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <LoadingProvider>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LoadingProvider>
      </ApolloProvider>
    </UserProvider>
  )
}

export default MyApp
