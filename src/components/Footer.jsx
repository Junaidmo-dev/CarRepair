import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white'>
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className='text-xl font-bold'>Detroit Auto Care</h3>
            </div>
            <p className='text-gray-400 text-sm mb-4'>
              Your trusted automotive service center in Detroit. ASE certified technicians with 20+ years of experience.
            </p>
            <div className='flex gap-3'>
              <a href='#' className='bg-slate-800 hover:bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href='#' className='bg-slate-800 hover:bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href='#' className='bg-slate-800 hover:bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href='#' className='bg-slate-800 hover:bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Home
                </a>
              </li>
              <li>
                <a href='#about' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> About Us
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Services
                </a>
              </li>
              <li>
                <a href='#contact' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Contact
                </a>
              </li>
              <li>
                <a href='#appointment' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Appointments
                </a>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Our Services</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Oil Change
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Brake Repair
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Engine Diagnostics
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> Transmission
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> AC & Heating
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2'>
                  <span className='text-red-500'>›</span> State Inspection
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Contact Us</h4>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0 mt-1">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p className='text-gray-400 text-sm'>1234 Woodward Avenue</p>
                  <p className='text-gray-400 text-sm'>Detroit, MI 48226</p>
                </div>
              </li>
              <li className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                </svg>
                <a href='tel:3135552886' className='text-gray-400 hover:text-red-500 transition-colors text-sm'>
                  (313) 555-AUTO
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href='mailto:info@detroitautocare.com' className='text-gray-400 hover:text-red-500 transition-colors text-sm'>
                  info@detroitautocare.com
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0 mt-1">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <p className='text-gray-400 text-sm'>Mon-Fri: 8AM - 6PM</p>
                  <p className='text-gray-400 text-sm'>Sat: 9AM - 4PM</p>
                  <p className='text-gray-400 text-sm'>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className='mt-12 pt-8 border-t border-slate-800'>
          <div className='bg-orange-500 rounded-2xl p-6 md:flex items-center justify-between'>
            <div className='mb-4 md:mb-0'>
              <h4 className='text-xl font-bold mb-1'>Get Special Offers & Updates</h4>
              <p className='text-sm opacity-90'>Subscribe to our newsletter for exclusive deals</p>
            </div>
            <div className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white w-64'
              />
              <button className='bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-slate-950 py-6'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='md:flex justify-between items-center text-center md:text-left'>
            <p className='text-gray-400 text-sm mb-3 md:mb-0'>
              © 2025 Detroit Auto Care. All rights reserved.
            </p>
            <div className='flex justify-center md:justify-end gap-6 text-sm'>
              <a href='#' className='text-gray-400 hover:text-red-500 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 hover:text-red-500 transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='text-gray-400 hover:text-red-500 transition-colors'>
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer