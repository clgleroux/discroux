import { useEffect, useState } from 'react';
import './App.css';
import { createUser, getUser } from './services/api';
import { iUser } from './models/User';
import ListUser from './components/ListUsers';
import Profile from './components/Profile';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<iUser[]>([]);
  const [avatar, setAvatar] = useState<iUser | undefined>();

  const onClickUser = (user: iUser) => {
    console.log(user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUser());
    };

    setAvatar(createUser(2812));

    fetchUsers().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="w-full flex items-center">
        <div className="w-80">
          {isLoading ? (
            <div></div>
          ) : (
            <div className="w-80 h-[calc(100vh-80px)] overflow-scroll relative">
              <h1>Discroux</h1>
              <ListUser users={users} onClick={onClickUser} />
              <div className="fixed bottom-0 w-[inherit] ">
                <Profile me={avatar} />
              </div>
            </div>
          )}
        </div>
        <div className="w-4/6">Coucou</div>
      </div>
    </>
  );
}

export default App;
