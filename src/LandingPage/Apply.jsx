import { Btn } from "../components/Button";
import { FaPlay } from "react-icons/fa6";

const Apply = () => {
  return (
    <div className="w-full text-white bg-black py-10">
      <div className="flex flex-col justify-center items-center ">
        <div className=" flex items-center gap-6 pb-4">
          <div className="relative flex items-center justify-center ">
            <div className="absolute inset-0 border-[10px] border-[#e9dcdc] rounded-full animate-ping"></div>
            <div className="relative flex items-center justify-center">
              <FaPlay
                className="text-white bg-black p-3 rounded-full  border-[1px] border-white"
                size={40}
              />
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center ">Let's best something Agency</h1>
        <h2 className="py-3 text-[13px] text-center">
          There are many variations of passages of agency
          <br /> Lorem Ipsum Fasts injecte.
        </h2>
        <Btn btn="APPLY NOW" />
      </div>
    </div>
  );
};
export default Apply;
