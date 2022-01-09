import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, client } from '../src/api/apolloServer'
import Layout from '../components/shared/Layout/Layout'
import Header from '../components/shared/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Layout>
        <Component {...pageProps} />
        <div id="modal"></div>
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
