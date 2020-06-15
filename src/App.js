import React from 'react';
import PostForm from "./components/post-form";
import Post from "./components/post";
import Fetched from "./components/fetchedPost";


function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Синхронные посты</h2>
                    <Post/>
                </div>
                <div className="col">
                    <h2>Асинхронные посты</h2>
                    <Fetched posts={[]}/>
                </div>
            </div>
        </div>
    );
}

export default App;
