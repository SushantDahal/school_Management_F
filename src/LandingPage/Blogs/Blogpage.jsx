import Navbar from "../Navbar";
import Mainpage from "../Mainpage";
import BlogCard from "../BlogCard";
import Title from "../Title";
import Food from "../../LandingPage/images/Food.jpg";
import Travel from "../../LandingPage/images/Travel.jpg";
import Technology from "../../LandingPage/images/Technology.jpg";
import Footer from "../Footer";
const Blogpage = () => {
  return (
    <div className="w-full min-w-[350px]">
      <Navbar />
      <Mainpage title="Blog" subtitle="blog" />
      <Title
        subtitle="LATEST NEWS & BLOG"
        maintitle="Our Latest Blog And News."
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4  max-w-[1240px] mx-auto py-10 mb-10">
        <BlogCard
          img={Food}
          btn="Food"
          title="Delicious and Nutritious: Healthy Recipes for a Balanced Diet"
          des="Discover tasty recipes that will help you maintain a healthy and balanced diet."
          bgColor="bg-[#ff5b5c]"
        />
        <BlogCard
          img={Travel}
          btn="Travel"
          title="Top 10 Must-Visit Destinations for Adventure Seekers"
          des="Embark on thrilling adventures by visiting these breathtaking destinations around the world."
          bgColor="bg-[#1ab69d]"
        />
        <BlogCard
          img={Technology}
          btn="Technology"
          title="Mastering JavaScript: Tips and Tricks for Web Developers"
          des="Explore advanced JavaScript techniques to enhance your web development skills."
          bgColor="bg-[#ff7f46]"
        />
        <BlogCard
          img={Technology}
          btn="Technology"
          title="Mastering JavaScript: Tips and Tricks for Web Developers"
          des="Explore advanced JavaScript techniques to enhance your web development skills."
          bgColor="bg-[#ff7f46]"
        />
        <BlogCard
          img={Food}
          btn="Food"
          title="Delicious and Nutritious: Healthy Recipes for a Balanced Diet"
          des="Discover tasty recipes that will help you maintain a healthy and balanced diet."
          bgColor="bg-[#ff5b5c]"
        />
        <BlogCard
          img={Travel}
          btn="Travel"
          title="Top 10 Must-Visit Destinations for Adventure Seekers"
          des="Embark on thrilling adventures by visiting these breathtaking destinations around the world."
          bgColor="bg-[#1ab69d]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Blogpage;
