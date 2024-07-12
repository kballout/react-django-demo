import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


export default function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getData = async() => {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/posts/api`)
            if(res.ok){
                const data = await res.json()
                setPosts(data)
                setLoading(false)
            }
        }

        getData()
    },[])

    if(loading){
        return <div>Loading</div>
    }
  return (
    <div>
        {posts.length === 0 ? (
            <p>There are no posts</p>
        ): (
            <div style={{display: 'flex', flexDirection: 'column', fontSize: 18, gap: '10px'}}>
                {posts.map((post) => (
                    <Link key={post.id} to={`/post/${post.id}`}>{post.title}</Link>
                ))}
            </div>
        )}
    </div>
  )
}
