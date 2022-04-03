import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ post, title }) => {
  if (!post.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {post &&
        post.map(post => (
          <div key={post._id} className="">
            <p className="">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.stockName}
              </Link>{' '}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.stockName }</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
