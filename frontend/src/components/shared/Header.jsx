import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/" className='logo'>GreenShield</Link>
      <li><NavLink className={(e) => {return e.isActive? "active": ""}} to="/">Home</NavLink></li>
      <li><NavLink className={(e) => {return e.isActive? "active": ""}} to="/about">About</NavLink></li>
      <li><NavLink className={(e) => {return e.isActive? "active": ""}} to="/products">Products</NavLink></li>
      <li><NavLink className={(e) => {return e.isActive? "active": ""}} to="/check-disease">Check Disease</NavLink></li>
      <li><NavLink className={(e) => {return e.isActive? "active": ""}} to="/contact">Contact</NavLink></li>
    </nav>
  )
}

export default Header
