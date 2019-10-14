import { gql } from 'apollo-server-express';

export default gql`
    type Message {
        _id: ID!
        content: String
        type: ConversationType
        conversation: Conversation
        user: User
        mentions: [User]
        attachments: [Attachment]
        createdAt: Date
        updatedAt: Date
    }
`;