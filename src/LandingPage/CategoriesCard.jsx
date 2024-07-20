import { BiBook } from "react-icons/bi";
import Bg_Img from "../LandingPage/images/Course1.jpg";

const CategoriesCard = (props) => {
  return (
    <>
      <div
        className={`bg-[#F3F7FB] flex items-center gap-2 relative py-20 rounded-md border-l-4 border-red-200 group hover:${props.divBgColor} hover:${props.textColor}  `}
      >
        <BiBook
          className={`absolute -left-11 mr-8 z-10 ${props.hoverIconColor} p-4 rounded-full text-white duration-500 group-hover:${props.iconBgColor}  group-hover:${props.iconColor}`}
          size={80}
        />
        <div className="absolute left-14">
          <h1 className="text-xl">{props.head}</h1>
          <h3 className="text-xs py-2 max-w-[180px]">{props.subhead}</h3>
        </div>
        <div
          className="absolute inset-0 opacity-0 duration-500 group-hover:opacity-[0.2] "
          style={{
            backgroundImage: `url(${Bg_Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default CategoriesCard;
//   className="absolute -left-11 mr-8 z-10 bg-[#8E56FF] p-4 rounded-full text-white duration-500 group-hover:bg-white group-hover:text-[#8E56FF] "
