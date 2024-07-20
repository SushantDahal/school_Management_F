const Search_quantity = (props) => {
  return (
    <div className="flex  gap-4 md:gap-4  justify-between p-2 my-2">
      <div className="flex gap-2 items-center">
        <h2>{props.show}</h2>
        <input
          type="number"
          className="w-12 rounded-md h-6 p-1 border-[1px] border-gray-400  "
        />
        <h2>{props.entries}</h2>
      </div>
      <div className="flex items-center gap-2">
        <h2>{props.search}</h2>
        <input
          type="text"
          className="border-[1px] border-gray-400 rounded-md py-1 px-2 max-w-[200px] "
        />
      </div>
    </div>
  );
};
export default Search_quantity;
