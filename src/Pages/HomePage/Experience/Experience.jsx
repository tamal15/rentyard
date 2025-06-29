import { ArrowDown } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 py-20 bg-gradient-to-tr from-lime-200 via-white to-cyan-100">
      {/* About Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-1 border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition text-sm font-medium">
          <ArrowDown size={14} />
          About
        </button>
      </div>

      {/* Headline */}
      <div className="text-center mt-20">
        <h1 className="text-[38px] md:text-[60px] font-semibold leading-tight">
          I’ve been{" "}
          <span className="bg-black text-white px-3 py-2 rounded-md inline-block">
            Developing
          </span>
        </h1>
        <h1 className="text-[38px] md:text-[60px] font-semibold mt-2">
          Websites since{" "}
          <span className="bg-black text-white px-4 py-2 rounded-md inline-block">
            2013
          </span>
        </h1>
        <p className="text-sm md:text-base text-center max-w-xl mx-auto mt-6 text-black font-normal leading-relaxed">
          We start every new client interaction with an in-depth discovery call where we get
          to know each other and recommend the best course of action.
        </p>
      </div>

      {/* Logos */}
      <div className="mt-24">
        <h2 className="text-lg md:text-xl font-bold tracking-tight mb-8">
          PREVIOUSLY <br className="md:hidden" /> WORKED ON
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-black text-white px-6 py-3 rounded-[40px] transform rotate-[-15deg] text-sm font-medium">
            awwwards.
          </div>
          <div className="border border-black px-6 py-3 rounded-[40px] text-sm font-medium">
            CSS WINNER
          </div>
          <div className="border border-black px-6 py-3 rounded-[40px] transform rotate-[6deg] text-sm font-medium">
            /thoughtworks
          </div>
          <div className="border border-black px-6 py-3 rounded-[40px] transform rotate-[-5deg] text-sm font-medium">
            facebook
          </div>
          <div className="border border-black px-6 py-3 rounded-[40px] transform rotate-[8deg] text-sm font-medium whitespace-nowrap">
            <span className="font-semibold">CSS</span>
            <span className="font-light ml-1">DesignAwards</span>
          </div>
          <div className="border border-black px-6 py-3 rounded-[40px] transform rotate-[-8deg] text-sm font-bold">
            AUTODESK
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
