import React from "react";
import Posts from "./posts";
const Fetched = (posts) => {
    if (!posts.length) {
        return <button className='btn btn-primary'>Загрузить</button>
    }
    return posts.map(posts => <Posts posts={posts} key={posts}/>)
}

export default Fetched;