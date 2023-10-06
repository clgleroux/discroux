import { iMessage } from '../models/Message';
import { format } from 'date-fns';

type Props = {
  info: iMessage | undefined;
};

const Message = ({ info }: Props) => {
  return (
    <div className="">
      {info && (
        <div
          className={`flex ${
            info.user.id === 2812 ? 'flex-row-reverse' : ''
          } items-center gap-8`}>
          <div className="contents">
            <img src={info.user.avatar} className="h-16 w-16 rounded-full" />
          </div>
          <div>
            <div
              className={`${
                info.user.id === 2812 ? 'text-right' : 'text-left'
              }`}>
              <b>{info.user.name}</b>&nbsp;
              {format(info.date, 'yyyy-MM-dd hh:mm')}
            </div>
            <div>{info.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
