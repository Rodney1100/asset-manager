import React from "react";

const allPost = ({ allPost, title }) => {
  if (!allPost.length) {
    return <h3>No Post in DataBase Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {allPost &&
        allPost.map((allPost) => (
          <div>
            <p>
              {allPost}
            </p>
          </div>
        ))}
    </div>
  );
};

export default allPost;
