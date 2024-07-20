const ActivitiesCard = (props) => {
  return (
    <>
      <div
        className={`py-4 bg-white flex items-center flex-col justify-center rounded-tr-[40px] rounded-bl-[40px] hover:border-2 hover:border-dashed  ${props.borderColor}`}
      >
        <div>{props.icon}</div>
        <h1 className="font-bold py-4">{props.name}</h1>
      </div>
    </>
  );
};

export default ActivitiesCard;
