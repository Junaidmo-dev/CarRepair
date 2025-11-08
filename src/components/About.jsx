import React from 'react'

const About = () => {
  return (
    <div id="about" className='min-h-screen bg-[#E5E5E5] w-full flex justify-center items-center p-4'>
      <div className='max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden scale-90'>
        {/* Header Banner */}
        <div className='h-24 bg-orange-500 relative'>
          <div className='absolute inset-0 bg-black opacity-10'></div>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
            <img 
              src="https://www.shutterstock.com/image-photo/portrait-asian-mechanic-checking-safety-600nw-2180535839.jpg" 
              alt="Michael Chan" 
              className='h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg' 
            />
          </div>
        </div>
        
        {/* Content */}
        <div className='pt-16 pb-6 px-6 text-center'>
          <h2 className='text-2xl font-bold text-gray-800 mb-1'>Michael Chan</h2>
          <div className='inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold mb-3'>
            Master Technician
          </div>
          
          <div className='bg-blue-50 rounded-xl p-3 mb-4'>
            <div className='flex items-center justify-center gap-2 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className='text-xs font-semibold text-gray-700'>20 Years Experience</span>
            </div>
            <p className='text-gray-600 text-xs leading-relaxed'>
              ASE Certified specialist in engine diagnostics, transmission repair, and electrical systems. Serving Detroit with honest, reliable auto care.
            </p>
          </div>

          {/* Location */}
          <div className='flex items-center justify-center gap-2 text-gray-600 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className='text-sm font-medium'>Detroit, Michigan</span>
          </div>

          {/* Services */}
          <div className='grid grid-cols-2 gap-2 mb-4'>
            <div className='bg-gray-50 rounded-lg p-2 text-left'>
              <div className='text-xs text-gray-500 mb-1'>Specialties</div>
              <div className='text-xs font-semibold text-gray-700'>Domestic Cars</div>
            </div>
            <div className='bg-gray-50 rounded-lg p-2 text-left'>
              <div className='text-xs text-gray-500 mb-1'>Also Expert In</div>
              <div className='text-xs font-semibold text-gray-700'>Imports & Trucks</div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className='flex gap-3 justify-center mb-3'>
            <button className='flex-1 bg-orange-500 hover:bg-orange-700 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
              </svg>
              Call Now
            </button>
            <button className='bg-blue-600 hover:bg-blue-800 text-white py-2.5 px-5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm'>
              Book Service
            </button>
          </div>

          {/* Social Links */}
          <div className='flex gap-4 justify-center pt-4 border-t border-gray-200'>
            <a href="#" className='text-gray-600 hover:text-pink-600 transition-colors cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className='text-gray-600 hover:text-blue-700 transition-colors cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className='text-gray-600 hover:text-blue-500 transition-colors cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About