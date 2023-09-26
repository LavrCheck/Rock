import React, { useState } from 'react';
import Post from "./Post";


const PostList = ({ posti }) => {
    return (
        <div className='content'>
            {posti.map((x) =>
                <Post  post={x} />
            )}
        </div>
    )
}

export default PostList;