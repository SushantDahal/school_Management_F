import { RiArrowUpDownLine } from "react-icons/ri";

const TableRow = (props) => {
  return (
    // <div className="flex  basis-[100%] bg-blue-200 overflow-hidden gap-6">
    //   <div className="flex m basis-1/5 gap-10 bg-red-300 items-center border-r-2 px-4">
    //     <div>
    //       <h1 className="text-[15px]">{props.head}</h1>
    //     </div>
    //     <div>{props.icon}</div>
    //   </div>
    // </div>
    <div className="flex basis-1/5 justify-between items-center border-r-2 px-4 py-3">
      <h1 className="text-[15px]">{props.head}</h1>
      <RiArrowUpDownLine className="md:flex hidden" />
    </div>
  );
};

export default TableRow;
