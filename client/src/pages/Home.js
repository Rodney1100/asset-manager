import { useQuery } from "@apollo/client";
import { QUERY_ALLPOST, QUERY_SINGLEUSERPOST } from "../utils/queries";
import SingleUserPost from "../components/Postlist";
import allPost from "../components/allPost";
const Home = () => {
  //  use useQuery hook to make query request
  // const { loading, data } = useQuery(QUERY_ALLPOST);
  // const allPost = data?.allPost || [];
  // console.log(allPost);
  const [ singleUserPost, { loading, data }  ] = useQuery(QUERY_SINGLEUSERPOST);
  const usersPost = data?.singleUserPost || [];
  console.log(singleUserPost);

  return (
    <main>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SingleUserPost
            singleUserPost={usersPost}
            title="title for all post here"
          />
        )}
        <br />
        <br />

        <div>
          <h3>{usersPost.username}</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
