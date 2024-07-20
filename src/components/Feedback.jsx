import Subheading from "./Subheading";
import { Btn } from "./Button";
import Heading from "./Heading";
import { FiMessageCircle } from "react-icons/fi";

const Feedback = () => {
  return (
    <div className=" mt-6 w-full  border-[1px] border-[#f7f4f4] px-6 py-4 ">
      <Heading
        heading1="Send Feedback"
        heading2="Dashboard /"
        heading3="Student"
        btn="Feedback History"
        icon={<FiMessageCircle />}
      />
      <Subheading subhead="Send Feedback" />
      <div className="my-4   ">
        <div className="flex  flex-col px-2 mb-4">
          <label htmlFor="" className="text-[16px] ">
            Leave Message
          </label>
          <textarea
            name=""
            id=""
            className="border-[1px]  p-2 rounded-md mt-1 h-[200px] outline-none  "
          ></textarea>
        </div>
        <Btn btn="Send Feedback" />
      </div>
    </div>
  );
};
export default Feedback;
