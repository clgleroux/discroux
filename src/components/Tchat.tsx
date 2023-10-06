import { useEffect, useRef, useState } from 'react';
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

  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        <div className="flex flex-col w-full h-screen">
          <div className="flex items-center gap-5 py-3 shadow px-3">
            <div className="w-10">
              <img
                src={user.avatar}
                alt={`Profile ${user.name}`}
                className="rounded-full"
              />
            </div>
            <div>{user.name}</div>
          </div>

          <div className="flex-1 overflow-scroll px-3" ref={messagesRef}>
            <MessagesList messages={messages} />
          </div>

          <div>
            <MessageNew setMessages={setNewMessages} avatar={avatar} />
          </div>
        </div>
      )}
    </>
  );
};

export default Tchat;
