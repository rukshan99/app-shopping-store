import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//import { AuthContext } from '';
import './NavLinks.css';

const NavLinks = props => {
    const auth = "";// useContext(AuthContext);

    //if(!auth) {
        return (
            <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
        <li>
          <NavLink to="/gadgets">Gadgets</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/pay">Pay</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Sign in</NavLink>
        </li>
    </ul>
        );
   // }
// else {
//   return (
//     <ul className="nav-links">
//       <li>
//         <NavLink to="/" exact>
//           Users
//         </NavLink>
//       </li>
//       {auth.isSignedIn && (
//         <li>
//           <NavLink to={`/${auth.userId}/`}></NavLink>
//         </li>
//       )}
//       {auth.isSignedIn && (
//         <li>
//           <NavLink to="></NavLink>
//         </li>
//       )}
//       {!auth.isSignedIn && (
//         <li>
//           <NavLink to="/auth">Sign in</NavLink>
//         </li>
//       )}
//     </ul>
//   );
//       }
};

export default NavLinks;
