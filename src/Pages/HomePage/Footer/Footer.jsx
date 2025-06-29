const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 rounded-t-[3rem] mt-16">
      <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-10">
        
        {/* Left Brand */}
        <div className="text-lime-400 text-xl font-bold">DEVLOP.ME</div>

        {/* Center Text */}
        <h2 className="text-4xl font-semibold text-center md:text-left">
          As you <span className="text-white">can</span>
        </h2>

        {/* Contact Sections */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Contact Info */}
          <div>
            <h4 className="text-gray-400 mb-2">Say hello</h4>
            <p className="text-sm">HELLO@DEVLOP.ME.COM</p>
            <p className="text-sm">MAHBUBUL@ME.COM</p>

            <h4 className="text-gray-400 mt-6 mb-2">Call</h4>
            <p className="text-sm">+784549 4981 00</p>
            <p className="text-sm">+8845 0100 211</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-gray-400 mb-2">Menu</h4>
            <ul className="space-y-1 text-sm">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PORTFOLIO</li>
              <li>BLOG</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-400 mb-2">Social</h4>
            <ul className="space-y-1 text-sm">
              <li>TWITTER</li>
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>BEHANCE</li>
              <li>DRIBBBLE</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-gray-400 text-sm">
        <div className="font-bold text-white">BESNIK</div>
        <div>© devlop.me 2022</div>
        <div>PRIVACY – TERMS</div>
      </div>
    </footer>
  );
};

export default Footer;
