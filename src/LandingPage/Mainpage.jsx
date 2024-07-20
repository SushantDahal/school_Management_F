import Female from "../LandingPage/images/Female.png";

const Mainpage = (props) => {
  return (
    <div className="bg-gradient-to-r from-violet-800 via-indigo-300 to-indigo-800 border-t-[1px]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 md:min-h-[400px] md:pt-20 py-6 md:mb-36 mb-4">
        <div className=" flex flex-col md:justify-center items-center pl-10">
          <div>
            <h1 className="text-[70px] text-white ">{props.title}</h1>
            <h2 className="text-3xl text-white">
              Home /{" "}
              <span className="text-[#f3a920] text-xl">{props.subtitle}</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <div>
            {" "}
            <img
              src={Female}
              alt=""
              className="px-8 h-[400px] block md:absolute -top-4 right-[20%] z-10 mx-auto md:mx-0  md:pt-0 pt-6 "
            />
          </div>
          <div className="md:w-[400px] bg-white rounded-full md:h-[400px] absolute right-[20%] -bottom-[60%]"></div>
        </div>
      </div>
    </div>
  );
};
export default Mainpage;
