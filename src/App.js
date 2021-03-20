import React from 'react'
import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";
import FetchedPosts from "./Components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
            <PostForm></PostForm>
        </div>
      </div>
        <div className="row">
            <div className="col">
                <h2>Синхронные посты</h2>
                <Posts />
            </div>
            <div className="col">
                <h2>Асинхронные посты</h2>
                <FetchedPosts posts={[]}/>
            </div>
        </div>
    </div>
  );
}

export default App;
