const Title = (props) => {
  return (
    <div className="w-full py-6  px-4">
      <div className="  ">
        <div className="flex gap-4 mx-auto px-2 items-center justify-center ">
          <h2 className="h-2 w-2 bg-blue-800"></h2>
          <h1>{props.subtitle}</h1>
          <h2 className="h-2 w-2 bg-blue-800"></h2>
        </div>
        <h1 className="text-center text-4xl  pt-3 font-bold leading-10 max-w-[600px] mx-auto">
          {props.maintitle}
        </h1>
      </div>
    </div>
  );
};

export default Title;
