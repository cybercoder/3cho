import mongoose, { Schema } from 'mongoose';
import softDelete from 'mongoosejs-soft-delete';
const MessageSchema = new Schema(
  {
    conversation: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    payload: {
      type: String,
      maxlength: [1440, 'Text too long.']
    },
    mentions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    attachments: {
      type: [{ filename: String, mimetype: String, encoding: String }]
    },
    seen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
MessageSchema.plugin(softDelete);
export default mongoose.model('Message', MessageSchema);
