import React from 'react'
import gql from "graphql-tag"

export const LOG_IN_USER = gql`
  mutation LOG_IN_USER($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      admin {
        id
        name
        email
      }
      jwt
    }
  }
`

export const SIGN_UP_USER = gql`
  mutation SIGN_UP_USER($name: String!, $email: String!, $password: String!) {
    signupAdmin(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`

export const UPDATE_FORADMIN = gql`
  mutation UPDATE_FORADMIN(
    $id: ID!
    $status: Boolean!
  ) {
    updateForAdmin(
    id: $id
    status:$status
    ) {
      id
    user{
      id
      name
    }
    status
    }
  }
`