import mongoose, { Schema } from 'mongoose';

const SubscriptionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: {
      unique: true
    }
  },
  conversations: [
    {
      conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation'
      },
      lastSeenMessage: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }
    }
  ]
});

export default mongoose.model('Subscription', SubscriptionSchema);
