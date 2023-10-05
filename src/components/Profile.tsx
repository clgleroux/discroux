import { iUser } from '../models/User';
import { FcMusic } from 'react-icons/fc';

type Props = {
  me: iUser | undefined;
};

const Profile = ({ me }: Props) => {
  return (
    <div className="bg-[#343243] text-white h-20">
      {me && (
        <div className="flex items-center bg-orange gap-5 py-2 px-1 h-full">
          <div className={`w-10`}>
            <img src={me.avatar} className="rounded-full" />
          </div>
          <div className="">
            <div className="font-medium truncate">{me.name}</div>
            <div className="text-sm truncate italic flex gap-0.5 items-center">
              <FcMusic />
              {me.music}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
