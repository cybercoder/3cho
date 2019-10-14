import { gql } from 'apollo-server-express';

export default gql`
  scalar Date
  scalar Coordinates

  type Attachment {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    # Empty field obligatory
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`;
