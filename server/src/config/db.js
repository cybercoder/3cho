import mongoose, { mongo } from 'mongoose';
let mongodbURL = `mongodb://localhost/echo`;
mongoose.Promise = global.Promise;
mongoose.set(`debug`, true);

try {
  mongoose.connect(mongodbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
} catch (e) {
  mongoose.createConnection(mongodbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
}

mongoose.connection
  .once('open', () => console.log(`MongoDB is running.`))
  .on('error', e => {
    throw e;
  });