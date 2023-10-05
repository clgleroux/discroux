import { iUser } from '../models/User';
import User from './User';

type Props = {
  users: iUser[];
  onClick: (user: iUser) => void;
};

const UsersList = ({ users, onClick }: Props) => {
  return (
    <div>
      {users &&
        users.map(user => (
          <div key={user.id} className="my-2">
            <User
              avatar={user.avatar}
              name={user.name}
              onClick={() => onClick(user)}
            />
          </div>
        ))}
    </div>
  );
};

export default UsersList;
