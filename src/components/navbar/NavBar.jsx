import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './navbar.scss';

export default function NavBar({ dogs }) {
  return (
    <div className="navbar">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {dogs.map((dog) => (
        <NavLink key={uuid()} exact to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
      ))}
    </div>
  );
}
