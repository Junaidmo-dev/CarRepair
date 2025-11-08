import { useState, useEffect } from 'react';

// Define the standard operating hours
const OPERATING_HOURS = {
  Mon: { start: 8, end: 18 }, // 8 AM to 6 PM (military time)
  Tue: { start: 8, end: 18 },
  Wed: { start: 8, end: 18 },
  Thu: { start: 8, end: 18 },
  Fri: { start: 8, end: 18 },
  Sat: { start: 9, end: 15 }, // Example weekend hours
  Sun: null, // Closed
};

/**
 * Checks if the shop is currently open based on local time.
 * @returns {{status: 'Open Now' | 'Closed', statusColor: string, isClosed: boolean}}
 */
const getOperatingStatus = () => {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();
  
  // Array of day names for easy lookup
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = dayNames[dayIndex];
  
  const schedule = OPERATING_HOURS[today];
  
  // Check if closed today
  if (!schedule) {
    return { status: 'Closed Today', statusColor: 'text-red-400', isClosed: true };
  }
  
  const { start, end } = schedule;
  
  // Check if open right now
  if (hour >= start && hour < end) {
    return { status: 'Open Now', statusColor: 'text-green-400', isClosed: false };
  } else {
    return { status: 'Closed', statusColor: 'text-red-400', isClosed: true };
  }
};


const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // State for the live operating status
  const [status, setStatus] = useState(getOperatingStatus());

  // Effect for hiding on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down OR if scrolled past 50px
      setIsVisible(currentScrollY < 50); 
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Effect for updating the operating status every minute
  useEffect(() => {
    // Update status immediately on mount
    setStatus(getOperatingStatus()); 
    
    // Set up an interval to check status every minute (60,000 milliseconds)
    const intervalId = setInterval(() => {
      setStatus(getOperatingStatus());
    }, 60000); 

    // Clear interval on cleanup
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  const contactInfo = [
    {
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '888-909-0909',
      href: 'tel:8889090909',
      label: 'Call us'
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: '123 Main St, Detroit',
      href: 'https://maps.google.com/?q=Detroit,Michigan',
      label: 'Get directions'
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: 'Example@gmail.com',
      href: 'mailto:Example@gmail.com',
      label: 'Email us',
      hideOnMobile: true
    }
  ];

  return (
    <div className={`bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 ${
      isVisible ? 'h-10 opacity-100' : 'h-0 opacity-0 overflow-hidden'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors ${
                  item.hideOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
                aria-label={item.label}
              >
                <span className="text-orange-400 group-hover:text-orange-300 transition-colors">
                  {item.icon}
                </span>
                <span className="text-xs font-medium tracking-wide">{item.text}</span>
              </a>
            ))}
          </div>

          {/* Right: Hours & Social */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Operating Hours (Now Dynamic) */}
            <div className="flex items-center space-x-2 text-gray-300">
              <svg className={`h-4 w-4 ${status.statusColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-medium">
                {/* Dynamically display status and color */}
                <span className={status.statusColor}>{status.status}</span>
                <span className="mx-2 text-gray-600">|</span>
                Mon-Fri: 8AM-6PM
              </span>
            </div>

            {/* Social Media (Unchanged) */}
            <div className="flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Google">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;