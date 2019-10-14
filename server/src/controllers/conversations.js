import {Conversation, Subscription} from '../models';

export default {
    findUserConversations: async ({user,page,limit}) => {
        let subscriptions = await Subscription.findOne(
            { user }
            //{ ObjectArray: { $slice: [(page - 1) * limit, (page - 1) * limit + limit] } }
          ).populate([
            {
              path: 'conversations.conversation',
              model: 'Conversation'
            }
          ]);
        return console.log(subscriptions);
    },
    createPV : async ({sender,receiver, message}) => {
        
    }
    
}