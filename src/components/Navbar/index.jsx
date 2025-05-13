import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import contact from "../../assets/images/contact.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "mailto:bharathahy640@gmail.com",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/bharath-svg",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/bhxrxthx/",
  },
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex items-center justify-between fixed top-0 z-50"
    >
      {/* Logo with shine effect */}
      <NavLink to="/" className="flex items-center group">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Bhxrxthx
        </motion.span>
      </NavLink>

      {/* Center Nav Links with animated underline */}
      <nav className="flex items-center gap-10 text-base font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-1 py-2 text-gray-700 hover:text-blue-600 transition-colors ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              About
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </>
          )}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `relative px-1 py-2 text-gray-700 hover:text-blue-600 transition-colors ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              Projects
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </>
          )}
        </NavLink>
      </nav>

      {/* Social Icons with floating animation */}
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
            aria-label={social.name}
          >
            <motion.img
              src={social.iconUrl}
              alt={social.name}
              className="w-5 h-5 object-contain"
              whileHover={{ scale: 1.1 }}
            />
          </motion.a>
        ))}
      </div>
    </motion.header>
  );
}

export default Navbar;
