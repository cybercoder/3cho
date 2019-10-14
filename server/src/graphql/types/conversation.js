import { gql } from 'apollo-server-express';

export default gql`
  enum ConversationType {
    CHANNEL
    DIRECT
    GROUP
  }

  type Conversation {
    _id: ID
    type: ConversationType
    name: String
    owner: User!
    admins: [User]
    members: [User]
    memberCount: Int
    avatars: [Attachment]
    messages: [Message]
    messageCount: Int
    lastMessage: Message
  }

  extend type Query {
    temp : Message
    listMyConversations(page: Int, limit: Int): [Conversation]
  }

  extend type Subscription {
    tempSub : Message
  }


`;
