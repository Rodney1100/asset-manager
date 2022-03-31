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

  const user = data?.User || {};
console.log(data)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='makeCenter'>
      <p>
          <span style={{ fontWeight: 700 }} className="text-light">
            {user.username}
          </span>{' '}
          Created an account {user.createdAt}
        </p>
        <div className="card-body">
          <p>{user.createdAt}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
