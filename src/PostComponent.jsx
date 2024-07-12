import React from 'react'

export default function PostComponent({postData}) {
  return (
    <div style={{backgroundColor: 'skyblue', width: '50%', padding: '1em'}} >
        <h3>{postData.title}</h3>
        <p style={{textDecoration: 'underline'}}>Content</p>
          <p>{postData.post}</p>
        <p style={{marginTop: '80px'}} >Date Created: {new Date(postData.date_posted).toLocaleDateString()}</p>
    </div>
  )
}
