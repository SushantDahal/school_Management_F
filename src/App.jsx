import BlogDetails from "./components/blog/BlogDetails";
import BlogList from "./components/blog/BlogList";
import CreateBlog from "./components/blog/createBlog";
import UpdateBlog from "./components/blog/UpdateBlog";
import StudentSidebar from "./components/studentdashboard/StudentSidebar";
import Landing from "./LandingPage/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogpage from "./LandingPage/Blogs/Blogpage";
import Coursepage from "./LandingPage/Courses/Coursepage";
import Contactpage from "./LandingPage/contact/Contactpage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StudentSidebar />} />
          <Route path="Landing" element={<Landing />} />

          <Route path="home" element={<Landing />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="courses" element={<Coursepage />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="about" element={<Coursepage />} />
          <Route path="pages" element={<Contactpage />} />



          {/* for blog page */}
          <Route path="/list" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
          <Route path="/details/:id" element={<BlogDetails />} />


        </Routes>
      </Router>
    </div>
  );
};

export default App;
