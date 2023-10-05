type Props = {
  avatar: string;
  name: string;
  onClick: () => void;
};

const User = ({ avatar, name, onClick }: Props) => {
  return (
    <>
      <div
        className={`flex items-center gap-2 cursor-pointer px-1 py-2 duration-200 hover:bg-blue-50`}
        onClick={onClick}>
        <div className={`w-10`}>
          <img src={avatar} alt={`Profile ${name}`} className="rounded-full" />
        </div>
        <div className="w-4/5 truncate">{name}</div>
      </div>
    </>
  );
};

export default User;
