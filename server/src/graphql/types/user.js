import { gql } from 'apollo-server-express';

export default gql`
type User {
    _id: ID!
    phone: String!
    username: String
  }
`;