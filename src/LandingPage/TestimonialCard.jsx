import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const TestimonialCard = (props) => {
  return (
    <>
      <div className=" bg-black relative flex flex-col items-center py-8 rounded-3xl my-4 px-4 border-dashed border-white border-2 group">
        <div className="absolute -top-10 text-[#f3a920] bg-white p-6 rounded-full group-hover:bg-[#f3a920] duration-300 group-hover:text-[white]">
          <FaQuoteLeft size={40} />
        </div>
        <h2 className="text-[14px] text-white pt-16 text-center pb-4">
          {props.description}
        </h2>
        <img src={props.img} alt="" />
        <h1 className="py-2">{props.name}</h1>
        <h2>{props.parent}</h2>
        <div className="flex gap-1 py-2 text-[#f3a920] text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-white" />
          <FaStar className="text-white" />
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
