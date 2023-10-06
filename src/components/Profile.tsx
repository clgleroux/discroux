import { iUser } from '../models/User';
import { FcMusic } from 'react-icons/fc';

type Props = {
  me: iUser | undefined;
};

const Profile = ({ me }: Props) => {
  return (
    <div className="bg-gray-400 text-white h-20 truncate">
      {me && (
        <div className="flex items-center gap-5 py-2 px-1 h-full">
          <div className={`w-10`}>
            <img src={me.avatar} className="rounded-full" />
          </div>
          <div className="">
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
        </div>
      )}
    </div>
  );
};

export default Profile;
