import { iMessage } from '../models/Message';
import { format } from 'date-fns';

type Props = {
  info: iMessage | undefined;
};

const Message = ({ info }: Props) => {
  return (
    <div className="duration-200 hover:bg-blue-50">
      {info && (
        <div
          className={`flex ${
            info.user.id === 2812 ? 'flex-row-reverse' : ''
          } items-center gap-4`}>
          <div className="contents ">
            <img
              src={info.user.avatar}
              className="h-16 w-16 p-2 rounded-full"
            />
          </div>
          <div>
            <div
              className={`${
                info.user.id === 2812 ? 'text-right' : 'text-left'
              }`}>
              <b>{info.user.name}</b>&nbsp;
              <span className="text-sm italic">
                {format(info.date, 'dd-MM-yyyy') ===
                format(new Date(), 'dd-MM-yyyy')
                  ? "Aujourd'hui à " + format(new Date(), 'HH:mm')
                  : format(new Date(), 'dd-MM-yyyy HH:mm')}
              </span>
            </div>
            <div
              className={`${
                info.user.id === 2812 ? 'text-right' : 'text-left'
              }`}>
              {info.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
