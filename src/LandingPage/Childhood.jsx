import { Btn } from "../components/Button";
import ChildhoodImg from "../LandingPage/images/img2.png";
import { FaCheck } from "react-icons/fa";

const Childhood = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto ">
      <div className="py-20 px-6 md:mx-0 mx-4">
        <div className="flex gap-2   items-center">
          <h2 className="h-2 w-2 bg-blue-800"></h2>
          <h1>Our About Us</h1>
        </div>
        <h1 className="md:text-[35px] text-2xl  pt-2 pb-4 font-bold leading-10">
          District Is Made Of About Students Childhood.
        </h1>
        <h2 className="text-[14px] font-sans text-gray-500">
          Business tailored it design, management & support services business
          agency elit, sed do eiusmod tempor.
        </h2>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <FaCheck className="text-red-400" />
            <h3 className="text-[14px] hover:underline font-sans">
              Business school's Institut constructivism.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-red-400" />
            <h3 className="text-[14px] hover:underline font-sans">
              We give management school best.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-red-400" />
            <h3 className="text-[14px] hover:underline font-sans">
              Media in this school solution.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-red-400" />
            <h3 className="text-[14px] hover:underline font-sans">
              Business school's Institut constructivism.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-red-400" />
            <h3 className="text-[14px] hover:underline font-sans">
              We give management school best.
            </h3>
          </div>
          <div className="my-6">
            <Btn btn="ABOUT MORE" />
          </div>
        </div>
      </div>
      <div className=" mx-auto px-6">
        <img src={ChildhoodImg} alt="  mx-4" />
      </div>
    </div>
  );
};

export default Childhood;
