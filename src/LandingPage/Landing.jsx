import Navbar from "./Navbar";
import Home from "./Home";
import Title from "./Title";
import Categories from "./Categories";
import Flexibly from "./Flexibly";
import Childhood from "./Childhood";
import Events from "./Events";
import Course from "./Course";
import Testimonial from "./Testimonial";
import Activities from "./Activities";
import Apply from "./Apply";
import Blog from "./Blog";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="max-w-full bg-gradient-to-r from-violet-100 to-indigo-300 min-w-[350px] ">
      <Navbar />
      <Home />
      <Title
        subtitle="OUR COURSE CATEGORIES"
        maintitle="We Success For Categories Creative Students."
      />
      <Categories />
      <Flexibly />
      <Childhood />
      <Events />
      <Course />
      <Testimonial />
      <Activities />
      <Apply />
      <Blog />
      <Footer />
    </div>
  );
};
export default Landing;
