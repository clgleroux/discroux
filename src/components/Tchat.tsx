import { useEffect, useRef, useState } from 'react';
import { iUser } from '../models/User';
import { getMessages } from '../services/api';
import MessageNew from './MessageNew';
import MessagesList from './MessagesList';
import { iMessage } from '../models/Message';
import UserPicture from './UserPicture';
import { AiOutlineEnvironment } from 'react-icons/ai';

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
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
          <div className="flex items-center gap-5 py-3 shadow-sm shadow-accent px-3 h-14 z-10">
            <UserPicture
              avatar={user.avatar}
              name={user.name}
              isOnline={user.isOnline}
            />

            <div className="flex items-center gap-3">
              {user.name}
              <a
                href={`https://www.google.fr/maps/place/${user.country}`}
                target="_blank"
                className="flex items-center gap-1 text-white bg-accent hover:bg-gray-700 duration-200 rounded-full px-3 py-1 text-sm">
                <AiOutlineEnvironment />
                {user.country}
              </a>
            </div>
          </div>

          <div className="flex-1 overflow-scroll px-3" ref={messagesRef}>
            <MessagesList messages={messages} />
          </div>

          <div>
            <MessageNew
              setMessages={setNewMessages}
              avatar={avatar}
              messagesLength={messages.length}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Tchat;
