import React from 'react';

const NavBar = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 80; // Approximate height of your navbar
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle click events for navigation
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo - Scrolls to home */}
        <div 
          className="text-2xl font-black text-gray-900 cursor-pointer"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Car<span className="text-orange-500">Repair</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {/* Home Link */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-gray-700 hover:text-orange-500 font-medium relative group transition-colors duration-200 py-2 cursor-pointer"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          {/* About Link */}
          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-gray-700 hover:text-orange-500 font-medium relative group transition-colors duration-200 py-2 cursor-pointer"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          {/* Services Link */}
          <a 
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-gray-700 hover:text-orange-500 font-medium relative group transition-colors duration-200 py-2 cursor-pointer"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          {/* Contact Link */}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-gray-700 hover:text-orange-500 font-medium relative group transition-colors duration-200 py-2 cursor-pointer"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Right side buttons container */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Book Appointment Button */}
          <a
            href="#appointment"
            onClick={(e) => handleNavClick(e, 'appointment')}
            className="bg-orange-500 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-semibold cursor-pointer transition-colors duration-300"
          >
            Book Appointment
          </a>

          {/* Call Button */}
          <a
            href="tel:8889090909"
            className="flex items-center space-x-2 border-2 border-green-500 text-green-500 hover:bg-[#00875D] hover:text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>888-909-0909</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;