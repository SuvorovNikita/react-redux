import React from "react";
import Posts from "./posts";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./redux/action";

const Fetched = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)


    if (!posts.length) {
        return <button
            onClick={() => dispatch(fetchPosts())}
            className='btn btn-primary'>
            Загрузить
        </button>
    }
    return posts.map(posts => <Posts posts={posts} key={posts.id}/>)
}

export default Fetched;