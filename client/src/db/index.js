import Realm from 'realm';

const ConversationSchema = {
  name: 'conversations',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    name: 'string',
    lastMessageId: 'string',
  },
};

const MessageSchema = {
  name: 'messages',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    content: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },
};

const dbOptions = {
  path: 'echo.realm',
  schema: [ConversationSchema, MessageSchema],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export const insertMessage = newMessage => {
  return new Promise(async (resolve, reject) => {
    try {
      let realm = await Realm.open(dbOptions);
      return realm.write(async () => {
        try {
          resolve(await realm.create('messages', newMessage));
        } catch (e) {
          reject(e);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const loadMessages = async (offset = 0) => {
  try {
    let realm = await Realm.open(dbOptions);
    let allMessages = realm.objects('messages');
    return allMessages;
    return Array.prototype.slice.call(allMessages, offset, offset + 10);
  } catch (error) {
    return error;
  }
};

export default new Realm(dbOptions);
