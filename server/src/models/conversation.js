import mongoose, { Schema } from 'mongoose';

const ConversationSchema = new Schema(
  {
    type: {
      type: String,
      enum : ['CHANNEL', 'GROUP', 'DIRECT'],
      default : 'DIRECT'
    },
    name: {
      type: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    admins: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    memberCount: {
      type: Number
    },
    avatars: {
      type: [{ filename: String, mimetype: String, encoding: String }]
    },
    messageCount: {
      type: Number,
      required: true,
      default: 1
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

ConversationSchema.statics = {
  incMembers(_id, amount) {
    return this.findByIdAndUpdate(_id, { $inc: { memberCount: amount } }, { new: true });
  }
};

ConversationSchema.virtual('messages', {
  ref: 'Message',
  localField: '_id',
  foreignField: 'conversation'
});

export default mongoose.model('Conversation', ConversationSchema);
