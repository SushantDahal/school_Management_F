import axios from "axios";

//create an axios instance with your backend url
const api=axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        'Content-Type':'application/json'
    }
})


//  define api function
export const createBlog=(data)=>api.post("/blogs/create", data, {headers:{'Content-Type':'multipart/form-data'}});
export const getAllBlogs=()=>api.get("/blogs/get-all");
export const getSingleBlog=(id)=>api.get(`/blogs/get-single/${id}`);
export const updateBlog=(id, data)=>api.patch(`/blogs/update/${id}`, data, {headers:{'Content-Type':'multipart/form-data'}});
export const deleteBlog=(id)=>api.delete(`/blogs/delete/${id}`)