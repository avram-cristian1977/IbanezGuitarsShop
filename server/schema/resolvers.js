const { guitarCategories, guitarsList, contact } = require('../guitars-data')
const _ = require('lodash')

const resolvers = {
    Query: {
        guitars: () => {
            return guitarsList
        },
        guitar: (parent, args) => {
            const { model } = args
            
            return _.find(guitarsList, { model:model })
        },

        categories: () => {
            return guitarCategories
        },
        category: (parent, args) => {
            const { id } = args
            return _.find(guitarCategories, { id: Number(id) })
        },
        hotDeals:()=>{
            return guitarsList.filter(deal => (deal.isHotDeal === true && deal.isAvailable === true))
        },
        contact:()=>{
            return contact
        },
        guitarBySlug:(parent, args)=>{
            const {slug} = args
           
            return _.find(guitarsList, { slug:slug })
           
        }
   },
   Mutation :{
    deleteGuitar:(parent, args)=>{
        const {id} = args
      _.remove(guitarsList, guitar=> guitar.id === Number(id))
      return null
        
    },
    updatePrice : (parent, args) => {
        let {id, newPrice} = args
        guitarsList.forEach(guitar => {
            if(guitar.id === Number(id)){
                guitar.price = newPrice
            }
            return guitar
        })
    },
    updateAvailability : (parent, args)=> {
        let {id} = args
        guitarsList.forEach(guitar => {
            if(guitar.id === Number(id)){
                guitar.isAvailable = !guitar.isAvailable
            }
            return guitar
        })
    },
    updateHotDeal : (parent, args) => {
        const {id} = args;
        guitarsList.forEach(guitar => {
            if(guitar.id === Number(id)){
                guitar.isHotDeal = !guitar.isHotDeal
            }
            return guitar
        })

    },
    createGuitar : (parent, args) => {
        const guitar = args.input
        const lastId = guitarsList[guitarsList.length-1].id
        guitar.id = lastId + 1
        guitarsList.push(guitar)
        return guitar
    }
   }, 
   Category : {
    guitars : (parent, args) => {

        return guitarsList.filter(guitar => {
            return guitar.category == parent.id
        })
       
    }
   },
   Guitar : {
       category : (parent, args) => {
           return guitarCategories.find(category => {
             return  category.id == parent.category
           })
       }
   }
}

module.exports = { resolvers }