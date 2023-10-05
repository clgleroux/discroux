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

  useEffect(() => {
    const fetchMessages = async () => {
      setMessages(await getMessages(user, avatar));
    };

    fetchMessages().then(() => {});
  }, [user]);

  return (
    <>
      {messages && (
        <>
          <MessagesList messages={messages} />
          {/* <MessageNew /> */}
        </>
      )}
    </>
  );
};

export default Tchat;
