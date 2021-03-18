import React from 'react'
import PostForm from "./Components/PostForm";

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
                POSTS
            </div>
            <div className="col">
                FETCH POSTS
            </div>
        </div>
    </div>
  );
}

export default App;
