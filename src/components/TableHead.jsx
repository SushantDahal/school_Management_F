import { RiArrowUpDownLine } from "react-icons/ri";
import TableRow from "./TableRow";
import NoData from "./NoData";
import ShowingEntries from "./ShowingEntries";

const TableHead = () => {
  return (
    <>
      <div className="flex   border border-gray-300">
        <TableRow head="id" icon={<RiArrowUpDownLine />} />
        <TableRow head="Subject" icon={<RiArrowUpDownLine />} />
        <TableRow head="AssignmentMark" icon={<RiArrowUpDownLine />} />
        <TableRow head="ExamMark" icon={<RiArrowUpDownLine />} />
        <TableRow head="Status" icon={<RiArrowUpDownLine />} />
      </div>
      <NoData />
      <ShowingEntries />
    </>
  );
};

export default TableHead;
