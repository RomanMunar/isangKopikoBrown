import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'
import { ManagedContexts } from './hooks'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ManagedContexts>
        <App />
      </ManagedContexts>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
