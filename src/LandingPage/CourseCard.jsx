import { IoArrowForwardCircleSharp } from "react-icons/io5";
const CourseCard = (props) => {
  return (
    <>
      <div
        className={`${props.bgColor} hover:-translate-y-10 duration-500 md:my-0 my-6 ease-in-out rounded-md md:h-auto max-w-[400px] mx-auto`}
      >
        <div className="flex justify-center md:pb-20 py-2">
          <img
            src={props.img}
            alt=""
            className="md:absolute rounded-full -top-24  w-[220px] border-[10px] border-white"
          />
        </div>
        <div className="px-8 md:pt-12 pt-2">
          <h1 className="text-xl py-3 text-center font-bold">{props.title}</h1>
          <h2 className="text-[14px] text-center">{props.description}</h2>
          <div className="flex justify-center">
            <IoArrowForwardCircleSharp
              size={40}
              className="my-6 hover:text-black duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
