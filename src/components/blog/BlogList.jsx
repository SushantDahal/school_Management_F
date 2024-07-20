import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../services/api";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <div>Blog List</div>
      <Link to={"/create"}>Create new Blogs</Link>
      {loading ? <p>loading</p> : (
        <ul>
            {blogs.map((blog)=>{
                <li key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                </li>
            })}
        </ul>
      )}
    </>
  );
};

export default BlogList;
