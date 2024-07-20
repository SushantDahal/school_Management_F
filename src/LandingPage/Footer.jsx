import Logo from "../LandingPage/images/logo.png";
import { Btn } from "../components/Button";
import {
  FaTiktok,
  FaFacebookSquare,
  FaInstagram,
  FaYoutubeSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className=" text-white max-w-[1240px] mx-auto py-10 rounded-[20px] text-xl">
        <div className="grid md:grid-cols-2 mx-4 md:gap-4 gap-10">
          <div className=" grid lg:grid-cols-2  ">
            <div className="px-12  ">
              <img
                src={Logo}
                alt="/"
                className="w-[100px] min-w-[70px] min-h-6 p-1  "
              />
              <p className="text-xs">
                Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni this dolores eos qui ratione .
              </p>
              <div className="flex gap-4    py-2 ">
                <FaTiktok size={25} className="min-w-[14px]" />
                <FaFacebookSquare size={25} className="min-w-[14px]" />
                <FaInstagram size={25} className="min-w-[14px]" />
                <FaYoutubeSquare size={25} className="min-w-[14px]" />
              </div>
              <p className="pointer text-xs  py-2 ">hello@blanxer.com</p>
            </div>
            <div className=" md:ml-16 ml-[50px]  pt-6  ">
              <h3 className="font-bold text-3xl pb-3">Quick Links</h3>
              <ul className=" cursor-pointer text-[15px]">
                <li className="py-1 pt-4">Best Services</li>
                <li className="py-1">Events</li>
                <li className="py-1">About Our Company</li>
                <li className="py-1">Business Contact</li>
                <li className="py-1">Make An Appointment</li>
              </ul>
            </div>
          </div>

          <div className=" grid lg:grid-cols-2  pt-6 ">
            <div className=" md:ml-16 ml-12">
              <h3 className="text-3xl pb-3 font-bold">Our Contacts</h3>
              <ul className=" cursor-pointer text-[14px]">
                <li className="py-1 pt-4">
                  Adress: 27 Division St, Berakuti, NY 121102, USA
                </li>
                <li className="py-1">
                  Phone: +8 1440 456 782
                  <br />
                  Fax: +8 846512 456 788
                </li>
                <li className="py-1">
                  Email: example@mail.com
                  <br />
                  Website: yourwebsite.com
                </li>
              </ul>
            </div>

            <div className="md:ml-16 ml-12 md:mt-0 mt-6">
              <h3 className="font-bold text-3xl pb-3">News Letter</h3>
              <ul className="text-xs cursor-pointer ">
                <li className="py-1 pt-4">
                  Our approach to itis unique around know work an we know Get
                  hands on the you like
                </li>
              </ul>
              <div className="flex bg-white px-2 rounded-full items-center my-4 ">
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-[100%] outline-none text-xs text-black"
                />
                <button
                  className={`bg-[#f3a920] flex justify-center   px-4 rounded-full text-white my-1 font-bold text-[16px] md:text-[15px] max-w-[100px] min-w-[40px]  hover:bg-[#363531] hover:text-[white]`}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1 className=" py-6 px-12 md:text-start text-center mx-4">
          Copyright © by youthIT.
        </h1>
      </div>
    </div>
  );
};
export default Footer;
