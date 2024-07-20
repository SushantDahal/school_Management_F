// src/components/blog/UpdateBlog.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks from 'react-router-dom'
import { getSingleBlog, updateBlog } from '../../services/api'; // Ensure this path is correct

const UpdateBlog = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // Use navigate to redirect
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getSingleBlog(id);
        setTitle(response.data.blog.title);
        setDescription(response.data.blog.description);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await updateBlog(id, formData);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/'); // Redirect to the homepage
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Update Blog</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateBlog;
