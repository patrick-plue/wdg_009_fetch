import { useState, useEffect } from "react";

import PostData from "./PostData";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>{
    // if(!response.ok) throw new Error(`test Request failed ${response.status}`)
    // return response.json()}).then((data) => setPosts(data)).catch((error) => console.log(error.message))
    const fetchData = async () => {
      try {
        const apiRes = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!apiRes.ok) throw new Error("Request failed");
        const data = await apiRes.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <PostData />
      {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
      {/* {posts?.map((post) => <p>{post.title}</p>)} */}
    </div>
  );
}

export default App;
