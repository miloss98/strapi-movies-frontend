import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($identifier: String!, $password: String!) {
    login(
      input: { identifier: $identifier, password: $password, provider: "local" }
    ) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
