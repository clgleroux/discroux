import { useState } from 'react';
import { iMessage } from '../models/Message';
import { iUser } from '../models/User';
import { AiOutlineSend, AiOutlineGithub } from 'react-icons/ai';
import { useKeyDown } from '../hooks/useKeyDown';

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<iMessage | undefined>>;
  avatar: iUser;
  messagesLength: number;
};

const KEYS = ['Enter'];

const MessageNew = ({ setMessages, avatar, messagesLength }: Props) => {
  const [input, setInput] = useState('');

  const handleOnClick = () => {
    setMessages({
      id: messagesLength,
      text: input,
      date: new Date(),
      user: avatar,
    });

    setInput('');
  };

  const handleOnGithub = () => {
    setMessages({
      id: messagesLength,
      text: 'https://github.com/clgleroux',
      date: new Date(),
      user: avatar,
    });
  };

  useKeyDown(handleOnClick, KEYS);

  return (
    <div className="w-full py-3 px-2 flex gap-5">
      <input
        value={input}
        onInput={e => setInput(e.currentTarget.value)}
        placeholder="Send Message"
        className="w-4/5 rounded-md p-2 bg-background-light placeholder-gray-800 dark:placeholder-current"></input>
      <button
        onClick={handleOnGithub}
        className="w-10 h-10 bg-accent hover:bg-gray-700 duration-200 rounded-full flex justify-center items-center">
        <AiOutlineGithub className="text-white" />
      </button>
      <button
        onClick={handleOnClick}
        disabled={input === ''}
        className="w-10 h-10 bg-accent disabled:bg-gray-100 hover:bg-gray-700 duration-200 rounded-full flex justify-center items-center">
        <AiOutlineSend className="text-white" />
      </button>
    </div>
  );
};

export default MessageNew;
