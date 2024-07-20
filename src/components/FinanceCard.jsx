const FinanceCard = (props) => {
  return (
    <div className="bg-red-100 flex flex-col items-center py-10 rounded-lg gap-4">
      <div>{props.icon}</div>
      <div className="mx-auto  text-center">
        <h1 className="font-bold text-xl">{props.amount}</h1>
        <h1 className="text-[15px] text-gray-600">{props.text}</h1>
      </div>
    </div>
  );
};
export default FinanceCard;
