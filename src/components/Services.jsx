import React from 'react'

const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: "Brake Service & Repair",
      description: "Complete brake system inspection, pad replacement, rotor resurfacing, and fluid flush.",
      price: "From $99"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify check engine lights and performance issues.",
      price: "From $79"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4"/>
          <path d="m16 6-4 4-4-4"/>
          <path d="M17 11v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3"/>
          <path d="M12 18v4"/>
        </svg>
      ),
      title: "Oil Change & Tune-Up",
      description: "Full synthetic or conventional oil change with multi-point inspection included.",
      price: "From $49"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      ),
      title: "Transmission Service",
      description: "Transmission fluid exchange, filter replacement, and comprehensive system check.",
      price: "From $149"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v12"/>
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
        </svg>
      ),
      title: "Suspension & Steering",
      description: "Shock and strut replacement, wheel alignment, and steering component repair.",
      price: "From $199"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
        </svg>
      ),
      title: "Electrical Systems",
      description: "Battery testing, alternator replacement, starter repair, and wiring diagnostics.",
      price: "From $89"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4"/>
          <path d="M12 18v4"/>
          <path d="M4.93 4.93l2.83 2.83"/>
          <path d="M16.24 16.24l2.83 2.83"/>
          <path d="M2 12h4"/>
          <path d="M18 12h4"/>
          <path d="M4.93 19.07l2.83-2.83"/>
          <path d="M16.24 7.76l2.83-2.83"/>
        </svg>
      ),
      title: "AC & Heating",
      description: "Air conditioning recharge, heater core service, and climate control repair.",
      price: "From $119"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "State Inspections",
      description: "Michigan safety and emissions inspections to keep your vehicle road legal.",
      price: "$35"
    }
  ]

  return (
    <div id="services" className='min-h-screen bg-[#E5E5E5]  py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-block bg-orange-600 text-white  px-4 py-2 rounded-full text-sm font-semibold mb-4'>
            DETROIT'S TRUSTED AUTO CARE
          </div>
          <h1 className='text-5xl font-bold text-gray-700 mb-4'>Our Services</h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Expert automotive repair and maintenance services for all makes and models. 
            Serving Detroit with honesty and quality since 2005.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {services.map((service, index) => (
            <div key={index} className='bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
              <div className='bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4'>
                {service.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>{service.title}</h3>
              <p className='text-gray-600 text-sm mb-4 leading-relaxed'>{service.description}</p>
              <div className='flex items-center justify-between'>
                <span className='text-red-600 font-bold text-lg'>{service.price}</span>
                <button className='text-sm text-blue-600 font-semibold hover:text-blue-700'>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className='bg-white rounded-3xl p-8 mb-12 '>
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>Why Choose Us?</h2>
          <div className='grid md:grid-cols-3 gap-6 '>
            <div className='text-center'>
              <div className='bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
              </div>
              <h4 className='font-bold text-gray-800 mb-2'>20+ Years Experience</h4>
              <p className='text-sm text-gray-600'>ASE certified technicians</p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <h4 className='font-bold text-gray-800 mb-2'>Quality Parts</h4>
              <p className='text-sm text-gray-600'>OEM and premium aftermarket</p>
            </div>
            
            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <h4 className='font-bold text-gray-800 mb-2'>Honest Pricing</h4>
              <p className='text-sm text-gray-600'>No hidden fees or surprises</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-orange-500 rounded-3xl p-8 text-center text-white'>
          <h2 className='text-3xl font-bold mb-3'>Ready to Get Started?</h2>
          <p className='text-lg mb-6 opacity-90'>Call us today or schedule your appointment online</p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button className='bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
              </svg>
              (313) 555-AUTO
            </button>
            <button className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all duration-300'>
              Schedule Appointment
            </button>
          </div>
          <p className='text-sm mt-6 opacity-80'>
            📍 1234 Woodward Ave, Detroit, MI 48226 | Mon-Fri 8AM-6PM, Sat 9AM-4PM
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services