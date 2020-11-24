import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Context from './Context'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-hectormr206.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
