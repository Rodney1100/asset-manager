import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaChartBar, FaAddressCard, FaDisease, FaNewspaper, FaFortAwesome, FaCogs, FaSignInAlt } from "react-icons/fa";
import Auth from "../../utils/auth";
const logout = event => {
  event.preventDefault();
  Auth.logout();
};
const Header = () => {
  return (
    <div>
      {/* nav starts */}
      <div className="side-nav">
        <Link to='/'>
          <img src="./iconAssetm.png" alt="logo" className="logoo-img" />
        </Link>
        <nav className="nav-links">
          {Auth.loggedIn() ? (
            <>
              <li><Link to="/"><FaFortAwesome /> &nbsp; Home</Link></li>
              <li><Link to="/Profile"><FaAddressCard />  &nbsp; Profile</Link></li>
              <li><Link to='/CreatePost'><FaChartBar /> &nbsp; Add Asset</Link></li>
              <li><Link to='/'><FaDisease /> &nbsp; Ideas</Link></li>
              <li><Link to='/'><FaNewspaper /> &nbsp; News</Link></li>
              <li><Link to='/'><FaCogs /> &nbsp; Settings</Link></li>
              <li> <a href="/" id="login-list" onClick={logout}><FaSignInAlt /> &nbsp; Logout</a> </li>
              <div className="active" />
            </>
          ) : (
            <>
              <li><Link to="/"><FaFortAwesome /> &nbsp; Home</Link></li>
              <li><Link to="/Profile"><FaAddressCard />  &nbsp; Profile</Link></li>
              <li><Link to='/'><FaChartBar /> &nbsp; Charts</Link></li>
              <li><Link to='/'><FaDisease /> &nbsp; Ideas</Link></li>
              <li><Link to='/'><FaNewspaper /> &nbsp; News</Link></li>
              <li><Link to='/'><FaCogs /> &nbsp; Settings</Link></li>
              <li id="login-list"><Link to='/Login'><FaSignInAlt /> &nbsp; Login</Link></li>
              <div className="active" />
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Header;

