import { gql } from "@apollo/client";

export const QUERY_SINGLEUSERPOST = gql`
  query singleUserPost($username: String) {
    singleUserPost(username: $username) {
      username
      stockName
      createdAt
      purchaseAt
      amountBought
      pricedAt
      _id
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;



export const QUERY_ALLPOST = gql`
  query allPost {
    allPost {
      username
      stockName
      createdAt
      purchaseAt
      amountBought
      pricedAt
      _id
    }
  }
`;

export const QUERY_ME = gql`
query Me {
  me {
    username
    email
    password
    createdAt
    posts {
      stockName
      createdAt
      purchaseAt
      amountBought
      pricedAt
      username
      _id
    }
  }
}`