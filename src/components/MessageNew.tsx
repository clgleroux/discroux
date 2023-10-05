import { iMessage } from '../models/Message';

type Props = {
  info: iMessage | undefined;
};

const MessageNew = ({ info }: Props) => {
  return (
    <div className="">
      <input></input>
    </div>
  );
};

export default MessageNew;
