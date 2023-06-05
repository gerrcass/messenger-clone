/* We need this types because in actions/getConversations.ts we have:
....
include: {
  users: true,
  messages: {
    include: {
      sender: true,
      seen: true,
    },
  },
},
... */

import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User;
  seen: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};
