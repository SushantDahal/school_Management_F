import Title from "./Title";
import Course1 from "../../src/LandingPage/images/Course1.jpg";
import Course2 from "../../src/LandingPage/images/Course2.jpg";
import Course3 from "../../src/LandingPage/images/Course3.jpg";
import Course4 from "../../src/LandingPage/images/Course4.jpg";

import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-2  ">
      <div className=" mb-4 md:mb-10 md:pb-20">
        <Title
          subtitle="OUR WORKING NOW"
          maintitle="Complete About Students Advance Course."
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6 cbg-red px-4 mx-10 relative text-white">
        <CourseCard
          title="Classes Completed On Time"
          description="We can provide you with a reliable handyan in London. you need to included the today. However we feel like we should do more and have fun."
          img={Course2}
          bgColor="bg-[#ff7f46]"
        />
        <CourseCard
          title="Research Papers Submitted "
          description="Our students have submitted groundbreaking research papers in various fields of study, contributing to the advancement of knowledge."
          img={Course1}
          bgColor="bg-[#1ab69d]"
        />
        <CourseCard
          title="Language Proficiency Course"
          description="We organize STEM workshops to engage students in hands-on learning experiences in science, technology, engineering, and mathematics."
          img={Course3}
          bgColor="bg-[#8e56ff]"
        />
        {/* <CourseCard
          title="STEM workshops conducted"
          description="We organize STEM workshops to engage students in hands-on learning experiences in science, technology, engineering, and mathematics."
          img={Course4}
          bgColor="bg-[#ff5b5c]"
        /> */}
      </div>
    </div>
  );
};

export default Course;
