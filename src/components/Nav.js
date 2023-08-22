import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
      <div className="border" />
      <NavLink to="/Calculator"> Calculator</NavLink>
      <div className="border" />
      <NavLink to="/Quotes"> Quotes</NavLink>
    </nav>
  </div>
);

export default Navbar;
