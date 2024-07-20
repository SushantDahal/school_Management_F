const Subheading = (props) => {
  return (
    <>
      <div className="flex items-center gap-2 my-4 px-2">
        <h1 className="sm:w-[200px] w-[220px]   md:text-[17px] sm:text-[18px] text-[15px] font-medium">
          {props.subhead}
        </h1>
        <hr className="bg-[#373434] w-[100%] " />
      </div>
    </>
  );
};

export default Subheading;
