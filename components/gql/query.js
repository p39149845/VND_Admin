import React from 'react'
import gql from "graphql-tag"

export const ME = gql`
  query ME {
    user{
    id
    name
    status
    vehicles{
      id
      description
      price
      imageUrl
      numberPeople
      foodDrink
      karaoke
      tv
      gps
      review{
        id
        star
        review
      }
    }
    requests{
      id
    country
    numberPeople
    startDate
    stopDate
    startLocation
    locationDescription
    status
    cost
      targetUser{
        id
        name
      }
  }
  metadata{
    gender
    # age
    idCard
    image
    driverlicense
    idCardIm
    driverlicenseIm
    status
    user{
      id
      name
      }
    }
  }
  }
`
export const QUERY_ALLUSER = gql`
  query QUERY_ALLUSER {
    allUser{
      id
      name
      email
      status
      metadata{
      id
      userName
      gender
      dateOfBirth
    }
  }
  }
`

export const QUERY_ALLVEHICLE = gql`
  query QUERY_ALLVEHICLE {
    allVehicle{
    id
    description
    numberPeople
    foodDrink
    karaoke
    tv
    gps
    country
    price
    imageUrl
    user{
      id
      name
      metadata{
        userName
        gender
      }
      review{
        star
        review
        starVehicle
        reviewVehicle
      }
  }
  }
  }
`
export const QUERY_ALLMETADATA = gql`
  query QUERY_ALLMETADATA {
    allMetadata{
    id
    gender
    userName
    dateOfBirth
    idCard
    driverlicense
    idCardIm
    driverlicenseIm
    image
    status
    user{
      id
      name
      email
    
    }
  }
  }
`

export const QUERY_REQUEST = gql`
  query QUERY_REQUEST {
    allRequest{
  id
  country
  numberPeople
  startDate
  stopDate
  startLocation
  locationDescription
  status
  user{
    id
    name
    vehicles{
      id
    }
  }
  targetUser{
    id
    name
    metadata{
      userName
      image
    }
  }
  targetVehicle{
    imageUrl
    description
    tv
    gps
    foodDrink
    karaoke
    price
    country
  }
}
  }
`