import { RiArrowUpDownLine } from "react-icons/ri";
import TableRow from "./TableRow";
import NoData from "./NoData";
import ShowingEntries from "./ShowingEntries";

const Notification_TH = () => {
  return (
    <>
      <div className="flex   border border-gray-300">
        <div className="flex basis-1/2 justify-center gap-3 items-center border-r-2 px-4 py-3">
          <h1 className="text-[15px]">Message</h1>
          <RiArrowUpDownLine className="md:flex hidden" />
        </div>
        <div className="flex basis-1/2 justify-center gap-3 items-center border-r-2 px-4 py-3">
          <h1 className="text-[15px]">Action</h1>
          <RiArrowUpDownLine className="md:flex hidden" />
        </div>
      </div>
      <NoData />
      <ShowingEntries />
    </>
  );
};

export default Notification_TH;
