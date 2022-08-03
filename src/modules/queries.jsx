import { gql } from "@apollo/client";

export const MOVIES = gql`
  query GetMovies {
    movies {
      data {
        id
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          released
          duration
          rating
        }
      }
    }
  }
`;

export const SINGLEMOVIE = gql`
  query GetSingleMovie($id: ID!) {
    movie(id: $id) {
      data {
        attributes {
          name
          rating
          image {
            data {
              attributes {
                url
              }
            }
          }
          description
          actors
          categories {
            data {
              attributes {
                name
              }
            }
          }
          director
          released
          duration
        }
      }
    }
  }
`;
