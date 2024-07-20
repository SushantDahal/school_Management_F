import Subheading from "./Subheading";
import { Btn } from "./Button";
import Heading from "./Heading";
import { FaRunning } from "react-icons/fa";
import Input_Field from "./Input_Field";

const Leave = () => {
  return (
    <div className=" mt-6 w-full  border-[1px] border-[#f7f4f4] px-6 py-4">
      <Heading
        heading1="Apply For Leave"
        heading2="Dashboard /"
        heading3="Student"
        btn="Leave Apply History"
        icon={<FaRunning />}
      />
      <Subheading subhead="Apply for Leave" />
      <div className="my-4  w-full flex flex-col gap-4  ">
        <Input_Field labl="Leave Date" type="date" placeholder="yy/mm/dd" />
        <div className="flex  flex-col px-2">
          <label htmlFor="" className="text-[16px] ">
            Leave Message
          </label>
          <textarea
            name=""
            id=""
            className="border-[1px]  p-2 rounded-md mt-1 h-[200px] outline-none  "
          ></textarea>
        </div>
        <Btn btn="Apply for Leave" />
      </div>
    </div>
  );
};
export default Leave;
