import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComponent from './PostComponent';

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getData = async () => {
            let path = `${process.env.REACT_APP_API_URL}/posts/api/${id}/`
            console.log(path);
            let res = await fetch(path)
            if (res.ok) {
                const data = await res.json()
                setPost(data)
            } else {
                console.log("There was an error getting the post");
            }
        }

        getData()
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}} >
            <PostComponent postData={post} />
        </div>
    );
}