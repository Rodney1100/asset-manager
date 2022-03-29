import { Link } from "react-router-dom";
import { FaHouseUser,FaChartBar , FaAddressCard, FaDisease, FaNewspaper, FaFortAwesome, FaCogs,FaSignInAlt} from "react-icons/fa";
const Header = () => {
  return (

    <div className="container">
      {/* nav starts */}
      <div className="side-nav">
          <img src="./iconAssetm.png" alt="logo" className="logoo-img"/>
        <ul className="nav-links">
          <li><a ><FaFortAwesome /><Link to="/">Home</Link></a></li>
          <li><a href="#"><FaChartBar/><Link to='/'>Charts</Link></a></li>
          <li><a href="#"><FaAddressCard/><Link to="/Profile">Profile </Link></a></li>
          <li><a href="#"><FaDisease /><Link to="/">Ideas</Link></a></li>
          <li><a href="#"><FaNewspaper /><Link to='/'>News</Link></a></li>
          <li><a href="#"><FaCogs /><Link to='/'>Settings</Link></a></li>
          <li id="login-list"><a href="#"><FaSignInAlt/><Link to='/'>Login</Link></a></li>
          <div className="active" />
        </ul>
      </div>

      {/* nav ends */}
      <div className="row">
        <div className="col">
          <h1>Asset Tracker</h1>
          <p>A way to track your assets and trading patterns using our simple to understand graphs, data, and charts with the information you
            insert regarding your assets and trading ideas
          </p>
          <button type="button">Explore</button>
        </div>
        <div className="col">
          <div className="card">
          </div>
          <div className="card">
          </div>
          <div className="card">
          </div>
          <div className="card">
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

