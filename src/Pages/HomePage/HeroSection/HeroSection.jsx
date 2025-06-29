import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-white via-green-100 to-lime-300">
      {/* Left Social Icons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 flex flex-col items-center gap-4 text-black">
        <BsTwitterX />
        <FaInstagram />
        <FaFacebookF />
        <div className="rotate-90 text-sm">@williamrey</div>
        <div className="h-10 border-l border-black mt-2"></div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center p-6">
        <h1 className="font-bold text-xl">DEVLOP.ME</h1>
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
        </nav>
        <button className="border px-4 py-2 rounded-full font-medium hover:bg-black hover:text-white transition">
          Start Project
        </button>
      </div>

      {/* Main Headline */}
      <div className="mt-24 max-w-6xl mx-auto px-4">
        <div className="text-[3rem] md:text-[4rem] font-black leading-tight">
          <span className="text-black">Trusted </span>
          <span className="bg-black text-white rounded-lg px-3 py-1 inline-block">Partner</span>{" "}
          <span className="text-black">for</span>
        </div>
        <div className="text-[3rem] md:text-[4rem] font-black leading-tight">
          <span className="text-black">Your Website </span>
          <span className="bg-black text-white rounded-lg px-3 py-1 inline-block">Develop.</span>
        </div>

        {/* Avatar Group */}
        <div className="flex items-center gap-2 mt-4">
          <img
            src="https://i.pravatar.cc/36?img=1"
            className="rounded-full w-9 h-9 border-2 border-white"
          />
          <img
            src="https://i.pravatar.cc/36?img=2"
            className="rounded-full w-9 h-9 border-2 border-white -ml-4"
          />
        </div>

        {/* Subtext */}
        <div className="mt-10 bg-white/80 backdrop-blur-sm border border-purple-500 rounded px-4 py-2 max-w-xl shadow">
          <p className="text-sm text-black font-medium leading-tight">
            <span className="bg-yellow-200">Building the world’s best marketing websites</span> for
            over a decade. <br />
            Your trusted partner for strategy, design, and dev.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 pb-10">
          <button className="border-2 border-black px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-black hover:text-white transition">
            <span>📞</span> Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
