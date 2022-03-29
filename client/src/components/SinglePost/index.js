import React from "react";
import { Link } from "react-router-dom";
const SingleUserPost = ({ singleUserPost, title }) => {
  if (!singleUserPost.length) {
    return <h3>No Post Yet...</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {singleUserPost &&
        singleUserPost.map((userPost) => (
          <div key={userPost.username}>
            <p>
              {userPost.username} bought {userPost.stockName}
            </p>
          </div>
        ))}
    </div>
  );
};

export default SingleUserPost;
