import React from 'react'
import Post from './Post'

const posts = [{
    id: '123',
    username: 'eseneosagie',
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papsreact.com/3ke",
    caption: "Toh bad Gon"
},
{
    id: '123',
    username: 'eseneosagie',
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papsreact.com/3ke",
    caption: "Toh bad Gon"
},
]

function Posts() {
  return (
    <div>
{/*Posts */}
{posts.map(post =>(
    <Post
     key={post.id} 
     id={post.id}
     username={post.username}
     userImg={post.userImg}
     img={post.img}
     caption={post.caption}
    />
))}


    </div>
  )
}

export default Posts