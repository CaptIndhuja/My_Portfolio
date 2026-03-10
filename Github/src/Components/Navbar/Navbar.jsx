import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0b0f2f]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-5">

        {/* Logo */}
        <span className="text-2xl md:text-3xl font-bold tracking-wide text-white">
          Indhuja<span className="text-cyan-400">.</span>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-gray-200 text-lg font-semibold">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="
                  relative hover:text-white transition
                  after:content-[''] after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-cyan-400
                  hover:after:w-full after:transition-all after:duration-300
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white cursor-pointer">
          {menu ? (
            <RiCloseLine size={32} onClick={() => setMenu(false)} />
          ) : (
            <RiMenu2Line size={32} onClick={() => setMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-[#0b0f2f] border-t border-white/10">
          <ul className="flex flex-col items-center gap-8 py-8 text-gray-200 text-xl font-semibold">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenu(false)}
                  className="hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
