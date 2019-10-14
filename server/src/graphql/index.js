import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));

const subscriptions = {
  onConnect: async (connectionParams, webSocket) => {
    console.warn('trying...');
  }
};
export default {
  typeDefs,
  resolvers,
  subscriptions,
  //schemaDirectives: { requireAuth: requireAuthDirective },
  context: ({ req, res, connection }) => ({ req, res, connection })
};
