import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
// import SinglePost from './SinglePost';


const Profile = (props) => {
  const { username: usersUsername } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: "test1" },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <p>
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          post on {post.createdAt}
        </p>
        <h1>this is from the profile</h1>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
