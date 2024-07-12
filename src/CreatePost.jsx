import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const title = useRef()
  const post = useRef()
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault()
    let data = {
      title: title.current.value,
      post: post.current.value
    }
    let res = await fetch(`${process.env.REACT_APP_API_URL}/posts/api`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
    if (res.ok) {
      navigate("/posts");
    } else {
      console.error('Failed to submit:', res.statusText);
    }
  }

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={(e) => submit(e)} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <input required ref={title} type="text" placeholder='Title' style={{ fontSize: 25, padding: '10px', width: '20%', borderRadius: '5px', height: '50px' }} />
        <textarea required ref={post} type="text" placeholder='Content' rows={3} style={{ width: '80%', fontSize: 15, padding: '10px', borderRadius: '5px' }} />
        <input className='basicBtn' type="submit" value={"Create"} />
      </form>
    </div>
  )
}
