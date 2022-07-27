import { FC } from 'react';
import './navbar.css';
import { FaStream, FaFontAwesomeFlag } from 'react-icons/fa';


export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <FaStream className="navbar__icon" />
      <h2>ToDo List</h2>
      <FaFontAwesomeFlag className="navbar__icon" />
    </nav>
  );
};
