//! When user clicked on navbar one of links will be underlined
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand text-white">Shopping Card</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" 
              style={({isActive})=> ({textDecoration:isActive && "underline"})}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new-product" className="nav-link"
              style={({isActive})=> ({textDecoration:isActive && "underline"})}>New Product</NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"
             className="nav-link"
             style={({isActive})=> ({textDecoration:isActive && "underline"})}>
                Product List
                
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about"
              className="nav-link"
              style={({isActive})=> ({textDecoration:isActive && "underline"})}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar