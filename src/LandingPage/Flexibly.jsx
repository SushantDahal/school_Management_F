import StudyImg from "../LandingPage/images/img1.jpg";
import { Btn } from "../components/Button";

const Flexibly = () => {
  return (
    <div className=" max-w-[1240px]  mx-auto  ">
      <div className="relative mx-10 custom-border grid md:grid-cols-5 bg-gradient-to-r from-violet-0 via-indigo-800 to-blue-400 max-w-[1180px]  gap-6 my-10 text-white py-4 rounded-md">
        <div className="md:col-span-2 col-span-5 mx-auto ">
          <img src={StudyImg} alt="/" />
        </div>
        <div className="mt-8 md:col-span-3 col-span-5 mx-auto px-4 max-w-[800px] ">
          <h1 className="text-xl font-bold md:text-start text-center">
            Study Off Flexibly
          </h1>
          <div className="flex items-center  gap-10 md:flex-row flex-col">
            <h2 className="basis-[65%] text-[13px] md:text-start text-center">
              We can provide you with a reliable handyan in Please input an
              email address down below school. Please input anand school.
              included the today.
            </h2>
            <div className="basis-[25%]">
              <Btn btn="READ MORE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexibly;
