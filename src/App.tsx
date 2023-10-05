import './App.css';
import User from './components/User';

function App() {
  const viewUser = () => {
    console.log('coucou');
  };
  return (
    <>
      <h1>Discroux</h1>
      <User avatar={`./user-default.png`} name={`coucou`} onClick={viewUser} />
    </>
  );
}

export default App;
