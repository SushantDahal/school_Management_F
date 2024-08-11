const Notice = (props) => {
  return (
    <div className="my-2 border-b-2 p-2 rounded-md">
      <h1 className="text-[15px] font-bold">{props.title}</h1>
      <p className="text-[12px] text-[#525050]">{props.desc}</p>
    </div>
  );
};
export default Notice;
