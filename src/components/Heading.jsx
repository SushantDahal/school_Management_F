const Heading = (props) => {
  return (
    <div className=" px-4 w-full py-2 bg-gradient-to-r from-[#8989ea] via-purple-200 to-blue-500 rounded-md">
      <div className=" md:flex grid gap-2 justify-between items-center ">
        <div>
          <h1 className="text-2xl font-bold">{props.heading1}</h1>
          <h2 className="md:text-[18px] text-[16px]  ">
            {props.heading2}
            <span className="text-[16px] text-[white]"> {props.heading3}</span>
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-[#f3a920]  py-2 px-4 rounded-lg text-[#f6f0f0] font-bold text-[16px] md:text-[15px] flex items-center gap-2 hover:bg-[#ffea32] hover:text-[white]">
            {props.icon}
            {props.btn}
          </button>
          <div>{props.plusIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
