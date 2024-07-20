import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const CoursepageCard = (props) => {
  return (
    <>
      <div className="bg-white max-w-[400px] mx-auto relative border-2 my-6 border-[#f3a920] rounded-md group flex flex-col md:justify-normal items-center md:items-start">
        <div className="overflow-hidden mx-auto">
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
          <div className="flex   items-center justify-between text-gray-600">
            <div className="flex items-center gap-2">
              <FaUserAlt />
              <h2 className="text-xs">{props.name}</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen />
              <h2 className="text-xs">{props.lesson}</h2>
            </div>
          </div>
          <h2 className="py-2 font-bold">{props.title}</h2>
          <h2 className="text-[13px] text-gray-600 ">{props.des}</h2>
        </div>
        <div className="w-full flex justify-between text-gray-500  px-6 gap-2 py-2 border-t-white border-t-2 duration-200 ease-in-out  my-4 hover:border-t-2 hover:border-t-[#f3a920]">
          <div className="flex gap-1 py-2 text-[#f3a920] text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-200" />
          </div>
          <h1>{props.Students}</h1>
        </div>
      </div>
    </>
  );
};
export default CoursepageCard;
