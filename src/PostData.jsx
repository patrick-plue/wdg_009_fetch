import { useState, useEffect } from "react";
import axios from "axios";

function PostData() {
  const [userData, setUserData] = useState({
    email: "john@doe.com",
    password: "supersecure",
  });

  const postUserData = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(userData)
    // }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error))
    axios
      .post("https://jsonplaceholder.typicode.com/posts", userData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>PostData</h1>
      <button onClick={postUserData}>Submit Data</button>
    </>
  );
}

export default PostData;
