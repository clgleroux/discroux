import { useEffect, useState } from 'react';
import './App.css';
import { getUser } from './services/api';
import { iUser } from './models/User';
import ListUser from './components/ListUsers';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<iUser[]>([]);

  const onClickUser = (user: iUser) => {
    console.log(user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUser());
    };

    fetchUsers().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Discroux</h1>
      {isLoading ? null : <ListUser users={users} onClick={onClickUser} />}
    </>
  );
}

export default App;
