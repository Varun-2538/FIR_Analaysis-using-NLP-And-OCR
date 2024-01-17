import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-36 py-3 flex justify-between items-center">
      <div className="font-bold text-xl">ReportEase</div>
      <div className="flex">
        <a
          href="<SupportCenterSection />"
          className="text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </a>
        <a
          href="/faqs"
          className="text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          FAQs
        </a>
        <a
          href="/analytics"
          className="text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Analytics
        </a>
        <a
          href="/developers"
          className="text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Developers
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
