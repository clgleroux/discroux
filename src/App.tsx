import { useEffect, useState } from 'react';
import './App.css';
import { createUser, getUser } from './services/api';
import { iUser } from './models/User';
import UsersList from './components/UsersList';
import Profile from './components/Profile';
import Tchat from './components/Tchat';

const USER_ID = 2812;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<iUser[]>([]);
  const [avatar, setAvatar] = useState<iUser | undefined>();

  const [userSelected, setUserSelected] = useState<iUser | undefined>();

  const onClickUser = (user: iUser) => {
    console.log(user);
    setUserSelected(user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUser());
    };

    setAvatar(createUser(USER_ID));

    fetchUsers().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="w-full flex">
        <div className="w-80 shadow">
          {isLoading ? (
            <div></div>
          ) : (
            <div className="w-80 h-[calc(100vh-80px)] overflow-scroll relative">
              <h1>Discroux</h1>
              <UsersList users={users} onClick={onClickUser} />
              <div className="fixed bottom-0 w-[inherit] ">
                <Profile me={avatar} />
              </div>
            </div>
          )}
        </div>
        {userSelected && avatar && (
          <div className="w-[calc(100vw-20rem)] h-screen overflow-scroll">
            <Tchat user={userSelected} avatar={avatar} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
