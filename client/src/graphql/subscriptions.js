import gql from 'graphql-tag';

export const TEMP = gql`
  subscription {
    tempSub {
      _id
      content
      createdAt
      updatedAt
    }
  }
`;
