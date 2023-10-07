import { useEffect, useState } from 'react';
import './App.css';
import { createUser, getUser } from './services/api';
import { iUser } from './models/User';
import UsersList from './components/UsersList';
import Profile from './components/Profile';
import Tchat from './components/Tchat';
import { PiWechatLogo } from 'react-icons/pi';

const USER_ID = 2812;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<iUser[]>([]);
  const [avatar, setAvatar] = useState<iUser | undefined>();

  const [userSelected, setUserSelected] = useState<iUser | undefined>();

  const [color, setColor] = useState<boolean>(false);

  const onClickUser = (user: iUser) => {
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
        <div className="w-80 shadow-sm shadow-accent z-10">
          {isLoading ? (
            <div></div>
          ) : (
            <div className="w-80 h-screen flex flex-col relative z-10">
              <h1 className="bg-primary text-text flex items-center gap-8 px-2 py-1 h-14">
                <PiWechatLogo className="h-10 w-10" />
                <span className="text-lg font-medium">Discroux</span>
              </h1>

              <div className="overflow-scroll flex-1 bg-accent">
                <UsersList users={users} onClick={onClickUser} />
              </div>

              <div className="">
                <Profile me={avatar} color={color} setColor={setColor} />
              </div>
            </div>
          )}
        </div>
        {userSelected && avatar && (
          <div className="w-[calc(100vw-20rem)] h-screen overflow-scroll bg-background text-text">
            <Tchat user={userSelected} avatar={avatar} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
