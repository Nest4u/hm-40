import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const GetData: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } 
      catch (err: any) {
        setError(err.message || 'Something went wrong');
      } 
      finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Get DATA</h1>
      <ul>
        {posts?.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetData;
