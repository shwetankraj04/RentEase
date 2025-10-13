import React from "react";

const Header = () => {
  return (
    <>
      <>
        <header className="flex justify-between items-center p-6 bg-white shadow">
          <h1 className="text-2xl font-bold text-blue-600">BrandName</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </header>
      </>
    </>
  );
};

export default Header;
