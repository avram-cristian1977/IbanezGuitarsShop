

import { gql } from '@apollo/client'

export const GET_ALL_GUITARS = gql`
 query GetAllGuitars{
  guitars {
     image
     brand 
     model 
     price
     id
     isHotDeal
     isAvailable
     slug
     
 }
}
`

export const GET_ALL_CATEGORIES = gql`
 query GetAllCategories{
  categories {
     image
    category
    id
    slug
 }
}
`

export const GET_GUITAR_BY_MODEL = gql`
query GetGuitarByModel($model: String) {
  guitar(model: $model) {
    price
    image
    brand
    color
    description
    isAvailable
    model
}
}
`

export const GET_HOT_DEALS = gql`
   query GetHotDeals{
    hotDeals {
        price
        model
        image
        id
        slug
        }
}
`

export const GET_CONTACT = gql`
   query GetContact{
    contact {
      address
      email 
      mobile 
      facebook 
      linkedIn  
      github 
      website 
 }
}
`


export const GET_GUITAR_BY_SLUG = gql`
query ($slug:String) {
   guitarBySlug(slug:$slug) {
      price
    image
    brand
    color
    description
    isAvailable
    isHotDeal
    model
    slug
   }
 }

`


export const GET_CATEGORY_GUITARS = gql`
query getCategoryGuitars($categoryId: ID!){
  category(id: $categoryId) {
    category 
    id 
    slug
    guitars {
    id
      model
      image
      slug
      price
      color
      isAvailable
      isHotDeal
      category {
        category
      }
    }
  }
}
`