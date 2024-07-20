import activitiesImg from "../LandingPage/images/puzzle1.jpg";
import { RiBillLine } from "react-icons/ri";
import ActivitiesCard from "./ActivitiesCard";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { MdOutlineOnDeviceTraining } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Activities = () => {
  return (
    <div className="max-w-[1340px] mx-auto  my-10">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="">
          <div className="px-10 pt-10 pb-4">
            <div className="flex gap-4 mx-auto px-2 justify-center lg:justify-normal items-center ">
              <h2 className="h-2 w-2 bg-blue-800 text-cen"></h2>
              <h1 className="">OUR BEST ACTIVITIES</h1>
              <h2 className="h-2 w-2 bg-blue-800"></h2>
            </div>
            <h1 className=" text-4xl  py-3 font-bold leading-10 lg:text-start text-center">
              We School Be Happy With Our Activities.
            </h1>
            <h2 className="text-[13px] lg:text-start text-center">
              Business tailored it design, management & support services
              <br />
              business agency elit, sed do eiusmod tempor.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 mx-8 gap-4">
            <ActivitiesCard
              name="Parenting Bill"
              borderColor="border-[#8E56FF]"
              icon={
                <RiBillLine
                  size={80}
                  className="bg-[#8E56FF] p-6 rounded-full text-white"
                />
              }
            />
            <ActivitiesCard
              name="Sports Training"
              borderColor="border-[#FF7F46]"
              icon={
                <MdOutlineOnDeviceTraining
                  size={80}
                  className="bg-[#FF7F46] p-6 rounded-full text-white"
                />
              }
            />
            <ActivitiesCard
              name="Engineering"
              borderColor="border-[#1ab69d]"
              icon={
                <FaGraduationCap
                  size={80}
                  className="bg-[#1ab69d] p-6 rounded-full text-white"
                />
              }
            />
            <ActivitiesCard
              name="School Directly"
              borderColor="border-[#5287f8]"
              icon={
                <HiMiniClipboardDocumentCheck
                  size={80}
                  className="bg-[#5287f8] p-6 rounded-full text-white"
                />
              }
            />
          </div>
        </div>
        <div className="md:px-10 px-6">
          <img src={activitiesImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activities;
