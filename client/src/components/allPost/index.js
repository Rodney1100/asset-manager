import React from "react";
import { Link } from "react-router-dom";
const AllPost = ({ allPost, title }) => {
  if (!AllPost.length) {
    return <h3>No Post in DataBase Yet</h3>;
  }
  return (
    <div>

      {title};
      <p className="card-header">
        <Link
          to={`/profile/${AllPost.username}`}
          style={{ fontWeight: 700 }}
        >
          {AllPost.username}
        </Link>{' '}
        thought on {AllPost.createdAt}
      </p>
      <div>
        <Link to={`/thought/${AllPost._id}`}>
          <p>{AllPost.stockName}</p>
          <p>
            Post: {AllPost.amountBought} || Click to{' '}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AllPost;
