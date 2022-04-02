import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import PostList from '../components/Profile';
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
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className='makeCenter'>

        <h2>
          {user.username} Created an account {user.createdAt}
        </h2>
        <div className="card-body">
          <p>{user.amountBought}</p>
        </div>
        <h1>
          <PostList
            posts={user.stockName}
            title={`${user.username}'s Stocks`}
          />
        </h1>
      </div>
    </div>
  );
};
export default Profile;
