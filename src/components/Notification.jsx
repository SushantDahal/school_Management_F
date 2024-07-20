import Search_quantity from "./Search_Quantity";
import TableHead from "./TableHead";
import Heading from "./Heading";
import PlusIcon from "./PlusIcon";
import { FaPlus } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Copyright from "./Copyright";
import Notification_TH from "./Notification_TH";

const Notification = () => {
  return (
    <div className=" mt-6 w-full   px-6 py-4 min-w-[620px]">
      <Heading
        heading1="Notification"
        heading2="Dashboard /"
        heading3="Notification"
        btn="Download"
        icon={<FaDownload />}
        plusIcon={
          <FaPlus
            size={20}
            className="bg-[#f3a920] w-10 h-10 px-2 flex items-center text-white rounded-md justify-center "
          />
        }
      />

      <div className="my-4 border-[1px] border-[#f7f4f4]  w-full flex flex-col gap-4 p-4 ">
        <Search_quantity show="Show" entries="entries" search="Search:" />
        <Notification_TH />
      </div>
      <hr />
      <Copyright />
    </div>
  );
};
export default Notification;
