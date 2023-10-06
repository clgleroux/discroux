import { useState } from 'react';
import { iMessage } from '../models/Message';
import { iUser } from '../models/User';
import { AiOutlineSend } from 'react-icons/ai';
import { useKeyDown } from '../hooks/useKeyDown';

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<iMessage | undefined>>;
  avatar: iUser;
};

const KEYS = ['Enter'];

const MessageNew = ({ setMessages, avatar }: Props) => {
  const [input, setInput] = useState('');

  const handleOnClick = () => {
    setMessages({
      id: 999,
      text: input,
      date: new Date(),
      user: avatar,
    });

    setInput('');
  };

  useKeyDown(handleOnClick, KEYS);

  return (
    <div className="bg-gray-50 w-full py-3 px-2 flex gap-5">
      <input
        value={input}
        onInput={e => setInput(e.currentTarget.value)}
        placeholder="Send Message"
        className="w-4/5 rounded-md"></input>
      <button
        onClick={handleOnClick}
        className="w-1/5 bg-gray-500 hover:bg-gray-700 duration-200 rounded-full flex justify-center items-center">
        <AiOutlineSend className="text-white" />
      </button>
    </div>
  );
};

export default MessageNew;
