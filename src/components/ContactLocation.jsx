import React, { useState } from 'react'

const ContactLocation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div id="contact" className='min-h-screen  py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='ml-6 '>
          <div className='inline-block  text-black  text-6xl font-semibold mb-6 font-poppins'>
            Contact US & Location
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          
          <div>{/* Map Section */}
        <div className='bg-white rounded-3xl p-8'>
  <h2 className='text-3xl font-bold text-gray-800 mb-6'>Find Us</h2>
  <div className='bg-gray-200 rounded-2xl overflow-hidden h-96 relative' style={{ width: '100%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47389.03296361425!2d-83.09514604999999!3d42.331427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d3451b1e2e7%3A0x6b6b64c69c3c0!2sWoodward%20Ave%2C%20Detroit%2C%20MI!5e0!3m2!1sen!2sus!4v1234567890"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Detroit Auto Care Location"
    ></iframe>
  </div>
</div>
 {/* Contact Info */}
          <div>
            <div className='bg-white rounded-3xl p-8 mb-6'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contact Information</h2>
              
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className=' w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-800 mb-1'>Phone</h3>
                    <p className='text-gray-600'>(313) 555-AUTO</p>
                    <p className='text-sm text-gray-500'>Mon-Fri: 8AM-6PM</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className=' w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-800 mb-1'>Email</h3>
                    <p className='text-gray-600'>info@detroitautocare.com</p>
                    <p className='text-sm text-gray-500'>We reply within 24 hours</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-800 mb-1'>Address</h3>
                    <p className='text-gray-600'>1234 Woodward Avenue</p>
                    <p className='text-gray-600'>Detroit, MI 48226</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className=' w-12 h-12 rounded-xl flex items-center justify-center shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-800 mb-1'>Business Hours</h3>
                    <p className='text-gray-600'>Monday - Friday: 8AM - 6PM</p>
                    <p className='text-gray-600'>Saturday: 9AM - 4PM</p>
                    <p className='text-gray-600'>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
</div>
          {/* Contact Form */}
          <div className='bg-white rounded-3xl p-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name *</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors'
                  placeholder='John Smith'
                />
              </div>

              <div className='grid md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors'
                    placeholder='john@email.com'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Phone *</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors'
                    placeholder='(313) 555-0123'
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Service Needed</label>
                <select
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors'
                >
                  <option value=''>Select a service</option>
                  <option value='oil-change'>Oil Change & Tune-Up</option>
                  <option value='brakes'>Brake Service</option>
                  <option value='diagnostics'>Engine Diagnostics</option>
                  <option value='transmission'>Transmission Service</option>
                  <option value='suspension'>Suspension & Steering</option>
                  <option value='electrical'>Electrical Systems</option>
                  <option value='ac-heating'>AC & Heating</option>
                  <option value='inspection'>State Inspection</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='mb-6'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors resize-none'
                  placeholder='Tell us about your vehicle and what service you need...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default ContactLocation