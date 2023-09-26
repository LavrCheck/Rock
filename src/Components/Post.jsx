import React from 'react';

const Post = (props) => {
    return(
        <div className='post'>
          <img src={props.post.img} className='kartinka'></img>
          <h1 className='nazvanie'>{props.post.nazvanie}</h1>
          <p className='opisanie'> {props.post.opisanie} </p>
          <a className='ssilka' href={props.post.silka} target='_blank'>Заценить</a>
        </div>
    )
}

export default Post;