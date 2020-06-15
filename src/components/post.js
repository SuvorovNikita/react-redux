import React from "react";
import Posts from "./posts";
import {connect} from "react-redux"

const Post = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className='text-center'>Постов нет</p>
    }
    return syncPosts.map(posts => <Posts posts={posts} key={posts.id}/>)
}
const mapStateToProps = state => {
   return {
       syncPosts: state.posts.posts
   }
}

export default connect(mapStateToProps)(Post);