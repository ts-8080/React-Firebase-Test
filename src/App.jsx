import db from "./firebase";
import "./App.css";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //データベースからデータを取得
    const postData = collection(db, "posts");
    // console.log(postData);
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    //リアルタイム取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.title}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
