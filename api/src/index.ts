import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { typeDefs, resolvers } from './graphql2'
const app = express()
require('dotenv')

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 5000 }, () => console.log('Hello there. Port 5000'))
