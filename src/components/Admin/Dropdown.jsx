import profile from "../../assets/signUpimg.png";

const Dropdown = () => {
  return (
    <div className="bg-[#f3dddd] flex flex-col gap-2 absolute right-2 w-40 top-4 mt-12 h-auto cursor-pointer ">
      <div className="flex  item-center py-2 bg-[#cdb7b7]">
        <img
          src={profile}
          alt="Profile Picture"
          className="w-8 h-8 object-cover py-1 rounded-full bg-[#aed0f2]"
        />
        <h1>Sushant</h1>
      </div>
      <h1 className="text-[16px] px-2 py-1 hover:bg-[#e1e1f4] ">
        {" "}
        My Profile update
      </h1>
      <h1 className="text-[16px] px-2 py-1 hover:bg-[#e1e1f4]"> Inbox</h1>
      <h1 className="text-[16px] px-2 pb-2 text-[#bebe4f] hover:bg-[#e1e1f4]">
        Logout
      </h1>
    </div>
  );
};

export default Dropdown;
