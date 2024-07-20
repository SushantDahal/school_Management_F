export const Btn = (props) => {
  return (
    <>
      <button className="bg-[#f3a920] py-2 px-6 rounded-lg text-white font-bold text-[16px] md:text-[15px] max-w-[200px] min-w-[120px] mx-2 hover:bg-[#ffea32] hover:text-[white]">
        {props.btn}
      </button>
    </>
  );
};
