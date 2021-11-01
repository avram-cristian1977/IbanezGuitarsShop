import { gql } from '@apollo/client'


export const DELETE_GUITAR = gql`
     mutation DeleteGuitar($deleteGuitarId: ID!){
        deleteGuitar(id: $deleteGuitarId) {
      id
  }
}
`

export const UPDATE_GUITAR_PRICE = gql`
 mutation UpdateGuitarPrice($updatePriceId: ID!, $newPrice: Int!){
  updatePrice(id: $updatePriceId, newPrice: $newPrice) {
    model
    price
  }
}
`

export const CREATE_GUITAR = gql`
mutation CreateGuitar($input: CreateGuitarInput){
  createGuitar(input : $input) {
    id
    model
    price
  }
}
`

export const TOGGLE_AVAILABILITY = gql`
mutation ToggleAvailability($updateAvailabilityId: ID!){
  updateAvailability(id: $updateAvailabilityId) {
    id
    model
    isAvailable
  }
}
`

export const TOGGLE_HOT_DEAL = gql`
mutation HoDeal($updateHotDealId: ID!){
  updateHotDeal(id: $updateHotDealId) {
    model
    id
    isHotDeal
  }
}

`