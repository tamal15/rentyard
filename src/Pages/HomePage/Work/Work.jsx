import { ArrowDownRight } from "lucide-react";

const Work = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-20 py-20 rounded-[40px]">
      {/* Header Button */}
      <div className="flex justify-start mb-6">
        <button className="flex items-center gap-2 border border-white text-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition">
          <ArrowDownRight size={14} />
          Work Process
        </button>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-extrabold border-4 border-purple-500 inline-block px-4 py-2 mb-14">
        My Work Process
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Discovery */}
        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <span className="bg-[#b3fff3] text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
              Discovery
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              We start every new client interaction with an in-depth discovery call where we
              get to know each other, discuss your current and future objectives, and
              recommend the best course of action.
            </p>
          </div>
          <a
            href="#"
            className="text-sm text-white underline mt-4 inline-flex items-center gap-1"
          >
            → Read More
          </a>
        </div>

        {/* Strategy */}
        <div className="bg-lime-300 text-black rounded-3xl p-6 transform rotate-[-3deg] min-h-[230px]">
          <span className="bg-black text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
            Strategy
          </span>
          <p className="text-sm leading-relaxed">
            Every end-to-end project of ours begins with a bespoke pre-build strategy. From
            brand ID consultation to in-depth code reviews were here to set the stage for
            success.
          </p>
          <a
            href="#"
            className="text-sm text-black underline mt-4 inline-flex items-center gap-1"
          >
            → Read More
          </a>
        </div>

        {/* Design */}
        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <span className="bg-[#b3fff3] text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
              Design
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              After we have a comprehensive understanding of your brand, well be ready to
              move onto design. Each page will be designed, reviewed, and given your stamp of
              approval.
            </p>
          </div>
          <a
            href="#"
            className="text-sm text-white underline mt-4 inline-flex items-center gap-1"
          >
            → Read More
          </a>
        </div>

        {/* Build */}
        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <span className="bg-[#b3fff3] text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
              Build
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              Whether weve just finished designing your new site or youre handing off
              finished designs for us to develop in Webflow, were here to apply our trusted
              development process to your project.
            </p>
          </div>
          <a
            href="#"
            className="text-sm text-white underline mt-4 inline-flex items-center gap-1"
          >
            → Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
