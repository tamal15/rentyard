import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import Work from "./Work/Work";

const Home = () => {
    return (
        <div>
            <HeroSection/>
           <div className="-mt-6 p-4">
             <SkillsSection/>
           </div>
           <div className="-mt-20 p-4">
             <Experience/>
           </div>
           <div className="-mt-16 p-4">
             <Work/>
           </div>
           <div className="mt-10 p-4">
             <Contact/>
           </div>
           <div className="md:-mt-32 -mt-24 p-4">
             <Footer/>
           </div>
        </div>
    );
};

export default Home;