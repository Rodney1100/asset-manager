import { useQuery } from "@apollo/client";
import { QUERY_ALLPOST, QUERY_SINGLEUSERPOST } from "../utils/queries";
import SingleUserPost from "../components/Postlist";
import allPost from "../components/allPost";
const Home = () => {
  //  use useQuery hook to make query request
  // const { loading, data } = useQuery(QUERY_ALLPOST);
  // const allPost = data?.allPost || [];
  // console.log(allPost);
  const { loading, data } = useQuery(QUERY_SINGLEUSERPOST);
  const singleUserPost = data?.singleUserPost || [];
  console.log(singleUserPost);

  return (
    <main>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SingleUserPost
            singleUserPost={singleUserPost}
            title="title for all post here"
          />
          )}
          <br/>
          <br/>
          
          <h3> or all post is here</h3> 
        <allPost
          allPost= {allPost}
        title = "this is for all post"
          />
        <div> </div>
      </div>
    </main>
  );
};

export default Home;
