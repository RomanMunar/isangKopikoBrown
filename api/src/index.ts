import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { typeDefs, resolvers } from './graphql'
import passport from 'passport'
import cors from 'cors'
import { getUserFromToken } from './models'

require('dotenv')

const app = express()

app.use(cors({ allowedHeaders: '*', origin: '*' }))
app.use(passport.initialize())
app.use(passport.session())

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ''
    // Try to retrieve a user with the token
    console.log({ token })
    const user = getUserFromToken(token)
    console.log({ user })
    // Add the user to the context
    return { user }
  },
})

server.applyMiddleware({ app })

app.listen({ port: 5000 }, () => console.log('Hello there. Port 5000'))
