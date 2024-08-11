import Navbar from "../../LandingPage/Navbar";
import Herosection from "../../LandingPage/Herosection";
import Google from "../../assets/google.png";
import { Link } from "react-router-dom";
import HomeImg from "../../LandingPage/images/img3.png";
import Female from "../../LandingPage/images/Female.png";
import { Btn } from "../Button";
import InputField from "./InputField";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full  py-8 bg-gradient-to-r from-violet-800 via-indigo-300 to-indigo-800 border-t-[1px]">
        <div className="max-w-[1240px] mx-auto  ">
          <div className="grid lg:grid-cols-2 ">
            <div className=" lg:order-1 order-2">
              <div>
                {" "}
                <img
                  src={Female}
                  alt=""
                  className="px-8 mx-auto   md:pt-0 pt-6 "
                />
              </div>
            </div>
            <div className="text-black flex flex-col max-w-[1000px] my-7 lg:px-6 px-12  lg:order-2 order-1">
              <div className="px-2">
                <h1 className="text-2xl md:text-3xl lg:text-3xl underline font-bold   text-center  ">
                  Mero school
                </h1>
              </div>
              <div className=" w-[100%] p-2 my-2 border-b-2 mx-auto">
                <form action="">
                  <InputField label="Email" placeholder="Email" type="email" />
                  <InputField
                    label="Password"
                    placeholder="password"
                    type="password"
                  />

                  <div className="flex md:flex-row justify-between mx-2 my-2  items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3  md:text-xs text-[12px]"
                      />
                      <label className="md:text-xs text-[12px]">
                        Remember Me
                      </label>
                    </div>
                    <p className="md:text-xs text-[12px] cursor-pointer">
                      Forgot Password?
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f3a920] text-white font-bold text-xl rounded-md py-2 my-3 cursor-pointer hover:bg-[#ffea32] hover:text-[white] duration-150 "
                  >
                    Sign In
                  </button>
                  <div className="w-full bg-[#f3a920] text-white font-bold text-xs rounded-md py-2 flex items-center cursor-pointer justify-center hover:bg-[#ffea32] hover:text-[white] duration-150  ">
                    <img src={Google} alt="" className="w-6 mx-2" />
                    <p>Sign in with Google</p>
                  </div>
                  <p className="text-center text-[18px] pt-4 py-2">
                    Don’t have an account ?
                    <Link to="/register">
                      <span className="text-[#ffea32] text-[16px] px-4  cursor-pointer">
                        sign up fo free!
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
