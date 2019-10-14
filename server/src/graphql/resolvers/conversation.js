import { withFilter } from 'apollo-server-express';
import conversations from '../../controllers/conversations';
import pubsub from '../../lib/pubsub';
import {v4 as uuid} from 'uuid'
export default {
    Query: {
        temp: async (_,__) => {
            let t = 
                {
                    _id: uuid().toString(),
                    content: Math.random().toString(36).substring(7),
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ;
            pubsub.publish('TEMP_SUB', {tempSub: t});
            return t;
        },
        listMyConversations: async (_, __, {req,res,connection}) => {
            let { user } = req || connection; 
            return await conversations.findUserConversations({user: user._id});
        }
    },
    Subscription: {
        tempSub: {
          subscribe: withFilter(
            () => pubsub.asyncIterator('TEMP_SUB'),
            (payload, variables, { req, connection }) => {
              console.log(payload);
              return true;
            }
          )
        }
      }
}