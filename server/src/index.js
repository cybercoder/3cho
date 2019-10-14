import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createServer } from 'http';
import schema from './graphql';

import './config/db';

const app = express();

const graphqlServer = new ApolloServer(schema);
const httpServer = createServer(app);

graphqlServer.applyMiddleware({
  app,
  cors: {
    origin: (origin, callback) => callback(null, true),
    credentials: true
  }
});

graphqlServer.installSubscriptionHandlers(httpServer);

if (process.env.NODE_ENV === 'production') httpServer.listen(800 + process.env.NODE_APP_INSTANCE);
else if (process.env.NODE_ENV === 'test') httpServer.listen(300 + process.env.NODE_APP_INSTANCE);
else
  httpServer.listen(4100, err => {
    console.log(err ? err : `🚀 server started on 4100`);
  });
