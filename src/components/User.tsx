import UserPicture from './UserPicture';

type Props = {
  avatar: string;
  name: string;
  isOnline: boolean;
  onClick: () => void;
};

const User = ({ avatar, name, isOnline, onClick }: Props) => {
  return (
    <>
      <div
        className={`flex items-center gap-2 cursor-pointer px-1 py-2 duration-200 hover:bg-blue-50`}
        onClick={onClick}>
        <UserPicture avatar={avatar} name={name} isOnline={isOnline} />
        <div className="w-4/5 truncate">{name}</div>
      </div>
    </>
  );
};

export default User;
