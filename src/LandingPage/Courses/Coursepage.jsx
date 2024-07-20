import Navbar from "../Navbar";
import Mainpage from "../Mainpage";
import CoursepageCard from "./CoursepageCard";
import Title from "../Title";
import Food from "../../LandingPage/images/Food.jpg";
import Travel from "../../LandingPage/images/Travel.jpg";
import Technology from "../../LandingPage/images/Technology.jpg";
// import Design from "../../LandingPage/images/Design.jpg";
import Footer from "../Footer";
const Coursepage = () => {
  return (
    <div className="w-full min-w-[350px]">
      <Navbar />
      <Mainpage title="All Course" subtitle="All Course" />
      <Title
        subtitle="OUR POPULAR COURSES"
        maintitle="Educational For Students Popular Courses."
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 cbg-red px-4 relative  max-w-[1240px] mx-auto">
        <CoursepageCard
          img={Food}
          btn="Drawing"
          name="Sushant Dahal"
          lesson="14 lessons"
          title="Development theory Learn"
          des="Learn about development theory in this comprehensive course."
          Students=" 50+ Students"
          bgColor="bg-[#ff5b5c]"
        />
        <CoursepageCard
          img={Technology}
          btn="English"
          name="Sushant Dahal"
          lesson="23  lessons"
          title="Learn photograpgy"
          des="Master the art of photography and take stunning pictures.."
          Students=" 61+ Students"
          bgColor="bg-[#1ab69d]"
        />
        <CoursepageCard
          img={Travel}
          btn="Design"
          name="Wrohit Dahal"
          lesson="40 lessons "
          title="Advance WordPress"
          des="Take your WordPress skills to the next level with advanced techniques."
          Students=" 72+ Students"
          bgColor="bg-[#4582ff]"
        />
        <CoursepageCard
          img={Food}
          btn="UI/UX"
          name="Sushant Dahal"
          lesson="14 lessons"
          title="The Complete Financial analyst"
          des="Become a skilled financial analyst and excel in the world of finance."
          Students=" 50+ Students"
          bgColor="bg-[#1ab69d]"
        />
        <CoursepageCard
          img={Travel}
          btn="Marketing"
          name="Sushant Dahal"
          lesson="23  lessons"
          title="Digital marketing Mastery"
          des="Master the art of digital marketing and boost your online presence."
          Students=" 61+ Students"
          bgColor="bg-[#4582ff]"
        />
        <CoursepageCard
          img={Technology}
          btn="Data Science"
          name="Wrohit Dahal"
          lesson="40 lessons "
          title="Data Science Funda,emtals"
          des="Learn the basics of data science and start your journey into data analysis."
          Students=" 72+ Students"
          bgColor="bg-[#ff5b5c]"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Coursepage;
