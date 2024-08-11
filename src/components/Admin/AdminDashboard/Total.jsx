const Total = (props) => {
  return (
    <div className="bg-[#f7f1f1] flex py-6 rounded-xl items-center justify-center gap-4">
      <div>{props.icon}</div>
      <div>
        <h1>{props.title}</h1>
        <h1 className="pt-1 font-bold ">{props.data}</h1>
      </div>
    </div>
  );
};
export default Total;
