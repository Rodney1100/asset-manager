import React from "react";
import { Link } from "react-router-dom";
import { FaHouseUser, FaChartBar, FaAddressCard, FaDisease, FaNewspaper, FaFortAwesome, FaCogs, FaSignInAlt } from "react-icons/fa";


const Header = () => {
  return (
      <div className="">
        {/* nav starts */}
        <div className="side-nav">
          <Link to='/'>
            <img src="./iconAssetm.png" alt="logo" className="logoo-img" />
          </Link>
          <nav className="nav-links">
            <li><Link to="/"><FaFortAwesome /> &nbsp; Home</Link></li>
            <li><Link to="/Profile"><FaAddressCard />  &nbsp; Profile</Link></li>
            <li><Link to='/'><FaChartBar /> &nbsp; Charts</Link></li>
            <li><Link to='/'><FaDisease /> &nbsp; Ideas</Link></li>
            <li><Link to='/'><FaNewspaper /> &nbsp; News</Link></li>
            <li><Link to='/'><FaCogs /> &nbsp; Settings</Link></li>
            <li id="login-list"><Link to='/Login'><FaSignInAlt /> &nbsp; Login</Link></li>
            <div className="active" />
          </nav>
          <div>

          </div>
        </div>
      </div>
  );
};
export default Header;

