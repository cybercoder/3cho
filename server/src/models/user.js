import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    phone: {
      type: String,
      index: true,
      unique: true
    },
    username: {
      type: String,
      index: true,
      unique: true
    }
  },
  { timestamps: true }
);
export default mongoose.model('User', UserSchema);
