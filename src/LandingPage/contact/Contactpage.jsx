import Navbar from "../Navbar";
import Herosection from "../Herosection";
import Title from "../Title";
import Footer from "../Footer";
import ContactCard from "./ContactCard";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Btn } from "../../components/Button";
import Map from "../../components/Map";
import { useState } from "react";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="w-full min-w-[350px]">
      <Navbar />
      <Herosection title="Contact" subtitle="contact" />
      <div className="max-w-[1240px] mx-auto">
        <Title subtitle="OUR CONTACT US" maintitle="Get Our Contact Now." />
        <h2 className="max-w-[700px] mx-auto text-center px-4">
          Promote your blog posts, case studies, and product announcements with
          branded videos, keeping customers coming back for services. Make the
          best effort.
        </h2>
      </div>
      <div className="grid lg:grid-cols-6 gap-4 p-4 max-w-[1240px] mx-auto py-10 mb-10">
        <div className="lg:col-span-4 col-span-6 p-2 mt-6">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 my-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-sm outline-none text-[16px] border border-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-sm outline-none text-[16px] border border-gray-400"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-[200px] p-4 mt-2 w-full outline-none text-[16px] border border-gray-400"
              placeholder="Message"
            ></textarea>
            <div className="my-4">
              <Btn btn="SEND REQUEST" />
            </div>
          </form>
        </div>
        <div className="border border-gray-200 lg:col-span-2 col-span-6 rounded-2xl flex flex-col justify-center md:justify-normal">
          <div className="h-[5px] rounded-2xl w-[95%] bg-[#ff7f46] mx-auto"></div>
          <div className="pb-8">
            <ContactCard
              contactIcon={
                <IoCall
                  className="bg-blue-800 p-4 rounded-full text-white"
                  size={60}
                />
              }
              call="Call"
              contact1="+977 9746888890"
              contact2="+977 9819067811"
            />
            <ContactCard
              contactIcon={
                <MdOutlineEmail
                  className="bg-[#ff7f46] p-4 rounded-full text-white"
                  size={60}
                />
              }
              call="Mail"
              contact1="youthit999@gmail.com"
              contact2="youthit999@gmail.com"
            />
            <ContactCard
              contactIcon={
                <MdLocationOn
                  className="bg-[#00d6d3] p-4 rounded-full text-white"
                  size={60}
                />
              }
              call="Address"
              contact1="Basbari, Nepal"
              contact2="Itahari"
            />
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default Contactpage;
