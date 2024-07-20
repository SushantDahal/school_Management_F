import { FaChevronRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
const EventCard = (props) => {
  return (
    <>
      <div className="bg-white max-w-[400px] mx-auto relative border-2 my-6 border-[#f3a920] rounded-md group flex flex-col md:justify-normal items-center md:items-start">
        <div className="overflow-hidden">
          <img
            src={props.img}
            alt=""
            className=" duration-300 ease-in-out group-hover:scale-y-[1.1] "
          />
        </div>
        <div className="mt-2 mx-4 px-2 py-2  ">
          <div className=" flex md:justify-normal justify-center  ">
            <button
              className={`${props.bgColor} absolute top-1 right-4 py-2 px-6 rounded-lg text-white my-2 font-bold text-[16px] md:text-[15px] max-w-[180px] min-w-[100px]  hover:bg-[#363531] hover:text-[white]`}
            >
              {props.btn}
            </button>
          </div>
          <div className="flex   items-center justify-between ">
            <div className="flex items-center gap-2">
              <IoLocationOutline />
              <h2 className="text-xs">{props.location}</h2>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeOutline />
              <h2 className="text-xs">{props.time}</h2>
            </div>
          </div>
          <h2 className="py-2 font-bold">{props.title}</h2>
          <h2 className="text-[13px] text-gray-600 ">{props.des}</h2>
        </div>
        <div className="w-full flex justify-between text-gray-500  px-6 gap-2 py-2 border-t-white border-t-2 duration-200 ease-in-out  my-4 hover:border-t-2 hover:border-t-[#f3a920]">
          <h1 className="hover:text-[#f3a920] duration-300 ease-in-out cursor-pointer">
            {props.name}
          </h1>
          <h1>{props.price}</h1>
        </div>
      </div>
    </>
  );
};
export default EventCard;
