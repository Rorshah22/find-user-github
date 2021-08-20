import { useState } from 'react';
import logo from '../../images/Vector.svg';
import './Header.css';

const Header = ({ getName }) => {
  const [state, setState] = useState();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getName(state);
  };

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter GitHub username"
          onChange={handleChange}
        />
        <button className="submit" type="submit"></button>
      </form>
    </header>
  );
};

export default Header;
