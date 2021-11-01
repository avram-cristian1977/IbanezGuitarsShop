const {gql} = require('apollo-server')

const typeDefs = gql`

type Query {
    guitars:[Guitar!]
    guitar(model:String):Guitar
    guitarBySlug(slug:String):Guitar
    categories:[Category!]
    category(id:ID!):Category
    hotDeals:[Guitar!]
    contact:Contact
}
type Mutation {
deleteGuitar(id:ID!):Guitar
updatePrice(id:ID!, newPrice:Int!):Guitar
updateAvailability(id:ID!):Guitar
updateHotDeal(id:ID!):Guitar
createGuitar(input:CreateGuitarInput):Guitar
}

input CreateGuitarInput {
    brand:String! 
    model:String
    description:String! 
    price:Int! 
    slug:String!
    image:String!
    color:Colors
    isAvailable:Boolean 
    isHotDeal:Boolean

}

type Guitar{
    id:ID! 
    slug:String!
    image:String!
    brand:String! 
    model:String
    color:Colors
    description:String! 
    price:Int! 
    isAvailable:Boolean
    isHotDeal:Boolean
    category:Category
}


type Category { 
    id:ID!
    slug:String 
    image:String
    category:String
    guitars:[Guitar!]!
}

type Contact {
    address:String
    email:String
    mobile:String
    facebook:String 
    linkedIn:String 
    github:String
    website:String
}


enum Colors {
        BLACK 
        WHITE 
        WOOD 
        RED 
        GREEN
        BLUE
}
`

module.exports = {typeDefs}