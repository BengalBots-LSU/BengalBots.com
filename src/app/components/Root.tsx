import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../imports/BengalBots_Logo.png";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ExecutiveBoard", label: "Executive Board" },
    { path: "/divisions", label: "Divisions" },
    { path: "/involvement", label: "Join Us"},
    { path: "/sponsors", label: "Sponsors"},
    { path: "/merch", label: "Merch" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Bengal Bots Logo" className="w-12 h-12 object-contain" />
              <span className="font-bold text-xl">BengalBots</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md mb-1 ${
                    location.pathname === link.path
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white mb-3">BengalBots</h3>
              <p className="text-sm">
                LSU's robotics organization dedicated to connecting
                students with robotics.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-purple-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/ExecutiveBoard" className="hover:text-purple-400 transition-colors">
                    Executive Board
                  </Link>
                </li>
                <li>
                  <Link to="/divisions" className="hover:text-purple-400 transition-colors">
                    Divisions
                  </Link>
                </li>
                <li>
                  <Link to="/involvement" className="hover:text-purple-400 transition-colors">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link to="/sponsors" className="hover:text-purple-400 transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link to="/merch" className="hover:text-purple-400 transition-colors">
                    Merch
                  </Link>
                </li>
              </ul>
            </div>
<div>
  <h3 className="font-bold text-white mb-3">Contact</h3>

  <p className="text-sm mb-4">
    Email: Bengalbots@lsu.edu
  </p>

  {/* SOCIAL ICON ROW */}
  <div className="flex gap-4 text-gray-300">
    <a
      href="https://www.instagram.com/bengal.bots/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition-colors"
    >
      <Instagram size={20} />
    </a>

    <a
      href="https://www.linkedin.com/company/bengalbots-lsu/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition-colors"
    >
      <Linkedin size={20} />
    </a>

    <a
      href="https://discord.com/invite/f9rmbGcU4y"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400 transition-colors"
    >
      <MessageCircle size={20} />
    </a>
  </div>
</div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2026 BengalBots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
