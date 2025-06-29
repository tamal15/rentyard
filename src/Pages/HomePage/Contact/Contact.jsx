import { FaPhone, FaArrowDown, FaPaperPlane, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-start justify-between bg-gradient-to-b from-white to-lime-200 p-6 md:p-20">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-8">
        <button className="flex items-center border border-black px-4 py-2 rounded-full space-x-2">
          <FaArrowDown className="text-sm" />
          <span>Contact</span>
        </button>

        <h1 className="text-5xl font-bold leading-snug">
          Interested in <br />
          <span className="inline-block bg-black text-white px-2 py-1 rounded-md">work</span>{" "}
          together?
        </h1>

        <p className="text-lg text-gray-800">
          We start every new client interaction with an in-depth discovery call where we get to know each other
        </p>

        <button className="flex items-center border border-black px-6 py-3 rounded-full text-lg space-x-3 hover:bg-black hover:text-white transition duration-300">
          <FaPhone />
          <span>Schedule a Call</span>
        </button>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-[420px] bg-black text-white p-8 mt-12 md:mt-0 rounded-3xl space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm">Enter your name</label>
            <input type="text" placeholder="" className="w-full border-b border-gray-600 bg-transparent focus:outline-none mt-1 py-2 focus:border-lime-400" />
          </div>
          <div>
            <input type="email" placeholder="Your email address" className="w-full border-b border-gray-600 bg-transparent focus:outline-none py-2 placeholder-gray-400" />
          </div>
          <div>
            <input type="text" placeholder="Describe your project" className="w-full border-b border-gray-600 bg-transparent focus:outline-none py-2 placeholder-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
            <FaPaperPlane />
            <span>Send</span>
          </button>
          <span>or</span>
          <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
            <FaEnvelope />
            <span>Contact me</span>
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-sm text-gray-400">@williamrey</span>
          <div className="flex items-center space-x-4 text-xl">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
