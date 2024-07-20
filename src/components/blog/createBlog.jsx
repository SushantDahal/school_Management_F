// src/components/CreateBlog.js
import { useState } from 'react';
import { createBlog } from '../../services/api';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(''); // State for image preview
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await createBlog(formData);
      setMessage(response.data.message);
      setTitle('');
      setDescription('');
      setFile(null);
      setPreview(''); // Clear the preview after successful submission
    } catch (error) {
      setMessage(error.response.data.error || 'An error occurred');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Create a URL for the selected image
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreview(fileUrl);
    } else {
      setPreview('');
    }
  };

  return (
    <div>
      <h1>Create Blog</h1>
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
          onChange={handleFileChange} // Updated file change handler
        />
        {preview && (
          <div>
            <h3>Image Preview:</h3>
            <img src={preview} alt="Image preview" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}
        <button type="submit">Create Blog</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateBlog;
