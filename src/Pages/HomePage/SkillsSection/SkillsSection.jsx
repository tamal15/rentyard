import { FaArrowLeft, FaArrowRight, FaReact } from "react-icons/fa";

const skills = [
  {
    title: "HTML & CSS",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    border: "border-yellow-500",
  },
  {
    title: "Javascript",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    border: "border-transparent",
    rotate: "rotate-[-6deg]",
  },
  {
    title: "Webflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    border: "border-transparent",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-black text-white rounded-t-[40px] pt-20 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Header Row */}
      <div className="flex justify-between flex-col md:flex-row items-start md:items-center mb-12">
        <div className="mb-6 md:mb-0">
          <button className="border border-white rounded-full px-4 py-2 mb-4 flex items-center gap-2 text-sm hover:bg-white hover:text-black transition">
            ⬇ Why Choose me
          </button>
          <h2 className="text-4xl font-extrabold leading-snug">
            My Extensive <br /> List of Skills
          </h2>
        </div>
        <div className="text-sm text-right max-w-md">
          <p className="mb-4">Building the worlds best marketing</p>
          <p>Your trusted partner for strategy, design, and dev.</p>
          <div className="w-full h-[1px] bg-white/40 my-4" />
          <div className="flex gap-3 justify-end">
            <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaArrowLeft size={14} />
            </button>
            <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`bg-[#1c1c1c] rounded-xl p-6 space-y-4 ${skill.rotate || ""}`}
          >
            <div className={`inline-block p-3 rounded-lg border ${skill.border}`}>
              <FaReact className="text-white text-4xl" />
              <div className="h-2 w-2 bg-lime-400 rounded-full absolute -top-1 -right-1"></div>
            </div>
            <h3 className="text-xl font-bold">{skill.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
