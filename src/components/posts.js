import React from "react";

const Posts = ({posts}) => {
    return <div className='card'>
        <div className="card-body">
            <h5 className='card-title'>{posts.title}</h5>
        </div>
    </div>
}

export default Posts;