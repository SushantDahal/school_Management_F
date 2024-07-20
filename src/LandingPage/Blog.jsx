import Title from "./Title";
import Food from "../LandingPage/images/Food.jpg";
import Travel from "../LandingPage/images/Travel.jpg";
import Technology from "../LandingPage/images/Technology.jpg";
// import Design from "../LandingPage/images/Design.jpg";

import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-10 pb-20">
      <Title
        subtitle="LATEST NEWS & BLOG"
        maintitle="Our Latest Blog And News."
      />
      <div className="grid md:grid-cols-3 px-4 bg-red gap-4">
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
    
      </div>
    </div>
  );
};
export default Blog;
// travel
// Top 10 Must-Visit Destinations for Adventure Seekers
// Embark on thrilling adventures by visiting these breathtaking destinations around the world.

// Technology
// Mastering JavaScript: Tips and Tricks for Web Developers
// Explore advanced JavaScript techniques to enhance your web development skills.

// Design
// Learn with these award-winning best blog collage courses
// We can provide you with a reliable hand in London you need today.
