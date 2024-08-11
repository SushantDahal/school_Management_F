const EnrolledCourse = (props) => {
  return (
    <div className="bg-red-100   py-8 rounded-3xl gap-4">
      <div className=" mx-10">
        <div className="flex h-20 my-2 justify-between items-center">
          <h1 className="text-[20px] text-[black] font-bold max-w-[200px]">
            {props.text}
          </h1>{" "}
          <div>{props.icon}</div>
        </div>
        <button className="text-white px-3 py-1 w-[100px] bg-gradient-to-r from-[#8989ea] via-purple-400 to-blue-300 rounded-full font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:text-black duration-300 ease-in-out ">
          View
        </button>
      </div>
    </div>
  );
};
export default EnrolledCourse;
