type Props = {
  avatar: string;
  name: string;
  onClick: () => void;
};

const User = ({ avatar, name, onClick }: Props) => {
  return (
    <>
      <div className={`flex items-center gap-2`} onClick={onClick}>
        <div className={`h-10 w-10`}>
          <img src={avatar} alt={`Profile ${name}`} className="rounded-full" />
        </div>
        <div>{name}</div>
      </div>
    </>
  );
};

export default User;
