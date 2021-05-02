import { gql } from 'apollo-server-core'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    title: 'Rustlang cookbook',
    author: 'Rob Pike',
  },
]

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

export const resolvers = {
  Query: {
    books: () => books,
  },
}
