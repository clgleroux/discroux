import { iMessage } from '../models/Message';
import Message from './Message';

type Props = {
  messages: iMessage[] | undefined;
};

const MessagesList = ({ messages }: Props) => {
  return (
    <>
      {messages &&
        messages.map(message => (
          <div key={message.id} className="my-2">
            <Message info={message} />
          </div>
        ))}
    </>
  );
};

export default MessagesList;
