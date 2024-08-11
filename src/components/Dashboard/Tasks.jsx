const Tasks = (props) => {
  return (
    <div className="bg-red-100 flex flex-col items-center py-10 rounded-3xl gap-4">
      <div>{props.icon}</div>
      <div className="mx-auto  text-center">
        <h1 className="font-bold text-xl">{props.text}</h1>
      </div>
    </div>
  );
};
export default Tasks;
