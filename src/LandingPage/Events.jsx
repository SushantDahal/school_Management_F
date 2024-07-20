import Title from "./Title";
import Food from "../LandingPage/images/Food.jpg";
import Travel from "../LandingPage/images/Travel.jpg";
import Technology from "../LandingPage/images/Technology.jpg";
// import Design from "../LandingPage/images/Design.jpg";
import EventCard from "./EventsCard";

const Events = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:pt-20 pt-10">
      <Title
        subtitle="OUR UPCOMING EVENTS
"
        maintitle="Complete About Students Advance Course."
      />
      <div className="grid md:grid-cols-3 px-4 bg-red gap-4">
        <EventCard
          img={Food}
          btn="Science"
          time="09.30 am - 11.30 am"
          location="Chicago, USA"
          title="Science Fair"
          des="Explore the wonders of science at our annual science fair. Fun for all ages!"
          name=" Mukush anderson"
          price="$15"
          bgColor="bg-[#ff5b5c]"
        />
        <EventCard
          img={Food}
          btn="School"
          time="08.00 am - 10.00 am"
          location="Dhaka, Bangladesh"
          title="Outdoor This Games"
          des="We can provide you with a reliable handyan in London you need to included the today.."
          name=" Sushant Dahal"
          price="$50"
          bgColor="bg-[#4582ff]"
        />
        <EventCard
          img={Food}
          btn="Sports"
          time="10.00 am - 12.00 pm"
          location="Los Angeles, USA"
          title="Basketball Tournament"
          des="Compete in our annual basketball tournament and show off your skills on the court."
          name="Wrohit Dahal"
          price="$15"
          bgColor="bg-[#1ab69d]"
        />
        {/* <EventCard
          img={Travel}
          btn="Travel"
          title="Top 10 Must-Visit Destinations for Adventure Seekers"
          des="Embark on thrilling adventures by visiting these breathtaking destinations around the world."
          bgColor="bg-[#1ab69d]"
        />
        <EventCard
          img={Technology}
          btn="Technology"
          title="Mastering JavaScript: Tips and Tricks for Web Developers"
          des="Explore advanced JavaScript techniques to enhance your web development skills."
          bgColor="bg-[#ff7f46]"
        /> */}
        {/* <EventCard
          img={Design}
          btn="Design"
          title="Learn with these award-winning best blog collage courses"
          des="We can provide you with a reliable hand in London you need today."
          bgColor="bg-[#ff5b5c]"
        /> */}
      </div>
    </div>
  );
};
export default Events;
