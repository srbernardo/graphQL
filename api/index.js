// import { ApolloServer } from 'apollo-server';

const { ApolloServer } = require('apollo-server')
const userSchema = require('./users/schemas/userSchema.graphql')
const userResolver = require('./users/resolvers/userResolver.js')
const UsersAPI = require('./users/datasource/user')

const typeDefs = [userSchema]
const resolvers = [userResolver]

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        }
    }
})

server.listen().then(({url}) => {
    console.log(`Funcionadno legal hein n a por ${url}`)
})