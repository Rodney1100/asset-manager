import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1> Asset Manager</h1>
        </Link>
        <nav>
          <Link to="/Login">Login </Link>
          <Link to="/Profile">Profile </Link>
          <Link to="/SinglePost">Single Asset</Link>
          <Link to="/UsePost">Your Assets</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
