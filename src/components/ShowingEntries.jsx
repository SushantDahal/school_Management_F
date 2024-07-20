const ShowingEntries = () => {
  return (
    <div className="flex justify-between my-6">
      <div>
        <h1>Showing 0 to 0 entries</h1>
      </div>
      <div className="border-2 rounded-md">
        <button className="border-r-2 p-2 hover:bg-slate-400 duration-200 ease-in-out hover:rounded-md">
          previous
        </button>
        <button className="p-2 hover:bg-slate-400 duration-200 ease-in-out hover:rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};
export default ShowingEntries;
