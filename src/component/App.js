import { useState } from 'react';
import './App.css';
import Header from './header/Header';

function App() {
  const [name, setName] = useState();

  const getName = (value) => {
    setName(value);
  };
  const URL = `https://api.github.com/users/${name}`;
  console.log(URL);
  return (
    <div className="App">
      <Header getName={getName} />
      {/* </Main> */}
    </div>
  );
}

export default App;
