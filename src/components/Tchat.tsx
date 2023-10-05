import { useEffect, useState } from 'react';
import { iUser } from '../models/User';
import { getMessages } from '../services/api';
import MessageNew from './MessageNew';
import MessagesList from './MessagesList';
import { iMessage } from '../models/Message';

type Props = {
  user: iUser;
  avatar: iUser;
};

const Tchat = ({ user, avatar }: Props) => {
  const [messages, setMessages] = useState<iMessage[]>();
  const [newMessage, setNewMessages] = useState<iMessage>();

  useEffect(() => {
    const fetchMessages = async () => {
      setMessages(await getMessages(user, avatar));
    };

    fetchMessages().then(() => {});
  }, [user]);

  useEffect(() => {
    if (messages && newMessage) {
      setMessages([...messages, newMessage]);
    } else if (newMessage) {
      setMessages([newMessage]);
    }
  }, [newMessage]);

  return (
    <>
      {messages && (
        <div className="px-3">
          <MessagesList messages={messages} />
          <MessageNew setMessages={setNewMessages} avatar={avatar} />
        </div>
      )}
    </>
  );
};

export default Tchat;
