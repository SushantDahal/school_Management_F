import { FaChevronRight } from "react-icons/fa6";
const BlogCard = (props) => {
  return (
    <>
      <div className="bg-white border-2 border-[#f3a920] rounded-md group flex flex-col md:justify-normal items-center md:items-start max-w-[400px] mx-auto">
        <div className="overflow-hidden">
          <img
            src={props.img}
            alt=""
            className=" duration-300 ease-in-out group-hover:scale-y-[1.1] "
          />
        </div>
        <div className="mt-4 mx-2 py-2 ">
          <div className=" flex md:justify-normal justify-center ">
            <button
              className={`${props.bgColor} py-2 px-6 rounded-lg text-white my-2 font-bold text-[16px] md:text-[15px] max-w-[180px] min-w-[100px]  hover:bg-[#363531] hover:text-[white]`}
            >
              {props.btn}
            </button>
          </div>
          <h2 className="py-2">{props.title}</h2>
          <h2 className="text-[13px] text-gray-600 ">{props.des}</h2>
        </div>
        <div className="flex items-center gap-2 mx-2 my-4">
          <h1 className="text-gray-500 hover:text-[#f3a920] duration-300 ease-in-out cursor-pointer">
            Read More
          </h1>
          <FaChevronRight
            className="bg-[#f3a920]  rounded-full p-1 text-white"
            size={20}
          />
        </div>
      </div>
    </>
  );
};
export default BlogCard;
