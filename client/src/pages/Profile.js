import React from 'react';
// import { FaNewspaper, FaFortAwesome, FaCogs, FaSignInAlt } from "react-icons/fa";

import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import PostList from '../components/Profile';
import { creatPost } from '../components/PostForm'
import { use } from 'bcrypt/promises';
import { FaCogs } from "react-icons/fa";
const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links to
        sign up or log in!
      </h4>
    );
  }


  return (
    <div>
      <div className='makeCenter'>
        {/* <li> <button><Link to="/CreatePost"> <FaCogs /> Create a Post</Link>    </button></li> */}
        <h2>
          {user.username} Created an account {user.createdAt}
        </h2>
      </div>
    </div>
  );
};
export default Profile;
