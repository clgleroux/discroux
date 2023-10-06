type Props = {
  avatar: string;
  name: string;
  isOnline: boolean;
};

const UserPicture = ({ avatar, name, isOnline }: Props) => {
  return (
    <div className={`w-10 relative`}>
      <img src={avatar} alt={`Profile ${name}`} className="rounded-full" />

      {isOnline && (
        <div className="absolute h-5 w-5 top-6 right-0 rounded-full bg-green-400 border-4 border-white"></div>
      )}
    </div>
  );
};

export default UserPicture;
