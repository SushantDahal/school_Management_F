import Title from "./Title";
import testimonialImg1 from "../LandingPage/images/Testimonial1.png";
import testimonialImg2 from "../LandingPage/images/Testimonial2.png";

import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  return (
    <div className="w-full bg-black text-white py-10">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="">
          <Title
            subtitle="OUR WORKING NOW"
            maintitle="Complete About Students Advance Course."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 ">
          <TestimonialCard
            description=" The dedicated faculty and staff at this school make learning a
              joyful experience. I couldn't have asked for a better educational
              environment."
            name="Rohit Dahal"
            parent="Parent"
            img={testimonialImg1}
          />
          <TestimonialCard
            description="This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents."
            name="Mukesh Dahal"
            parent="Developer"
            img={testimonialImg2}
          />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
// The dedicated faculty and staff at this school make learning a joyful experience. I couldn't have asked for a better educational environment.
// This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents.
