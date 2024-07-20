import HomeImg from "../LandingPage/images/img3.png";
import { Btn } from "../components/Button";
import { FaPlay } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-4 gap-0 max-w-[1240px] mx-auto md:mb-0 mb-14">
        <div className="  md:pt-32 p-6 py-10">
          <div className="flex gap-2  px-2 items-center">
            <h2 className="h-2 w-2 bg-blue-800"></h2>
            <h1>WELCOME TO EDUON!</h1>
          </div>
          <div>
            <h1 className="md:text-[60px] text-[40px] md:leading-[70px] leading-[50px] font-bold py-4 md:mt-3">
              Students for{" "}
              <span className="underline text-[#f3a920] font-bold">Little</span>{" "}
              Education from.
            </h1>
            <h2 className=" text-[13px]  ">
              Our agency can only be as strong as our people & because of team
              have designed game changing products.
            </h2>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <Btn btn="READ MORE" />

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 border-[10px] border-[#756262] rounded-full animate-ping"></div>
              <div className="relative flex items-center justify-center">
                <FaPlay
                  className="text-white bg-black p-3 rounded-full"
                  size={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={HomeImg} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};
export default Home;
