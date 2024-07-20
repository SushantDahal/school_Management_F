// src/components/blog/BlogDetails.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks from 'react-router-dom'
import { deleteBlog, getSingleBlog } from '../../services/api'; // Ensure this path is correct

const BlogDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [blog, setBlog] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use navigate to redirect

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getSingleBlog(id);
        setBlog(response.data.blog);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setMessage('An error occurred while fetching the blog.');
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBlog(id); // Call deleteBlog API to delete the blog
      setMessage('Blog deleted successfully.');
      setTimeout(() => {
        navigate('/'); // Redirect to the homepage after deletion
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Blog Details</h1>
      {message && <p>{message}</p>}
      {blog ? (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            />
          )}
          <button 
            onClick={handleDelete} 
            style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Delete Blog
          </button>
        </div>
      ) : (
        <p>Loading blog details...</p>
      )}
    </div>
  );
};

export default BlogDetails;
