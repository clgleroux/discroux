import { iUser } from '../models/User';
import { FcMusic } from 'react-icons/fc';

type Props = {
  me: iUser | undefined;
  color: boolean;
  setColor: React.Dispatch<React.SetStateAction<boolean>>;
};

const Profile = ({ me, color, setColor }: Props) => {
  const handleOnColor = () => {
    setColor(!color);
  };

  return (
    <div className="bg-secondary text-white h-20 truncate">
      {me && (
        <div className="flex items-center gap-5 py-2 px-1 h-full relative">
          <div className={`w-10`}>
            <img src={me.avatar} className="rounded-full" />
          </div>

          <div>
            <div className="font-medium truncate">{me.name}</div>
            <div className="text-sm truncate italic">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="flex gap-0.5 items-center hover:underline"
                target="_blank">
                <FcMusic />
                {me.music}
              </a>
            </div>
          </div>

          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={handleOnColor}>
            {color ? '⚫️' : '🔵'}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
