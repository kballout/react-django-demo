import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <nav style={{fontSize: '25px', color: "white", background: '#090808', padding: '5px'}}>
              <ul style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'space-around' }}>
                  <Link className='basicBtn' to="/">Home</Link>
                  <Link className='basicBtn' to="/posts">Posts</Link>
                  <Link className='basicBtn' to="/create-post">Create Post</Link>
            </ul>
        </nav>
    </div>
  )
}
