const Input_Field = (props) => {
  return (
    <>
      <div className="flex  flex-col px-2 ">
        <label htmlFor="" className="text-[16px] ">
          {props.labl}
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="border-[1px] py-1 px-1 rounded-md mt-1"
        />
      </div>
    </>
  );
};
export default Input_Field;
