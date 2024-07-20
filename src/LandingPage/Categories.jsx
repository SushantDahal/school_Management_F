import { BiBook } from "react-icons/bi";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:px-8 px-16 py-10 ">
      <div className="grid md:grid-cols-3 md:gap-20 gap-10 md:mx-10 ">
        <CategoriesCard
          head="Music Conference"
          subhead="We can provide you with a handyan in London."
          textColor="text-white"
          bgColor="bg-[#8E56FF]"
          hoverIconColor="bg-[#8E56FF]"
          iconBgColor="bg-white"
          iconColor="text-[#8E56FF]"
        />
        <CategoriesCard
          head="Book Exclusive"
          subhead="We can provide you with a handyan in London."
          textColor="text-white"
          bgColor="bg-[#8E56FF]"
          hoverIconColor="bg-[#4582FF]"
          iconBgColor="bg-white"
          iconColor="text-[#8E56FF]"
        />
        <CategoriesCard
          head="School Study"
          subhead="We can provide you with a handyan in London."
          textColor="text-white"
          bgColor="bg-[#8E56FF]"
          hoverIconColor="bg-[#1AB69D]"
          iconBgColor="bg-white"
          iconColor="text-[#8E56FF]"
        />
        <CategoriesCard
          head="School Study"
          subhead="We can provide you with a handyan in London."
          textColor="text-white"
          bgColor="bg-[#8E56FF]"
          hoverIconColor="bg-[#ADA729]"
          iconBgColor="bg-white"
          iconColor="text-[#8E56FF]"
        />
        <CategoriesCard
          head="Exclusive Party"
          subhead="We can provide you with a handyan in London."
          textColor="text-white"
          bgColor="bg-[#FF7F46]"
          hoverIconColor="bg-[#FF7F46]"
          iconBgColor="bg-white"
          iconColor="text-[#8E56FF]"
        />
        <CategoriesCard
          head="Exclusive Man"
          subhead="We can provide you with a handyan in London."
          textColor="text-white"
          bgColor="bg-[#8E56FF]"
          hoverIconColor="bg-[#FF5B5C]"
          iconBgColor="bg-white"
          iconColor="text-[#8E56FF]"
        />
      </div>
    </div>
  );
};

export default Categories;
