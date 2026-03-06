import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white pt-24 pb-16 px-10">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-4xl font-black mb-6 tracking-wider">
            Furniture Haven
          </h3>
          <p className="text-gray-300 leading-8 text-lg">
            Discover elegant and modern furniture crafted with quality materials.
            We bring comfort, luxury, and durability to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-3xl font-bold mb-6">Quick Links</h5>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="/" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="/" className="hover:text-cyan-400">Shop</a></li>
            <li><a href="/" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h5 className="text-3xl font-bold mb-6">Categories</h5>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:text-cyan-400">Sofa</a></li>
            <li><a href="/" className="hover:text-cyan-400">Bed</a></li>
            <li><a href="/" className="hover:text-cyan-400">Almirah</a></li>
            <li><a href="/" className="hover:text-cyan-400">Dining Table</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-3xl font-bold mb-6">Contact Us</h5>
          <p className="text-lg">📍 Delhi</p>
          <p className="text-lg">📞 8839693702</p>
          <p className="text-lg">📧 jayushi892@gmail.com</p>

          <div className="mt-6">
            <h6 className="text-xl font-semibold mb-3">
              Subscribe Newsletter
            </h6>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-white/20 placeholder-gray-300 text-white focus:outline-none mb-3"
            />
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-bold">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <hr className="border-white/30 my-8" />

      <div className="text-center text-gray-300 text-lg">
        © 2026 Jayushi Furniture | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;