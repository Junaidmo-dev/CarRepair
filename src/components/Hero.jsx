import carphoto from "../assets/carphoto.png";
import Chatbot from "./Chatbot";
const Hero = () => {
  const orangePrimary = 'bg-orange-500 hover:bg-orange-700';

  return (
    // The hero container remains the same, acting as the relative parent
    <div id="home" className="bg-white min-h-[75vh] flex items-center relative overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          
          {/* Left Text Content - Remains z-indexed above the image */}
          <div className="lg:w-1/2 w-full z-10 lg:pr-10 pt-10 lg:pt-4">
           <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-2 shadow-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              #1 Rated Auto Repair
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-16 mt-4 mb-6">
              Fast auto repairs that keep you moving
            </h1>
             <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Expert mechanics, honest pricing, and same-day service. Get back on the road with confidence.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="#appointment" 
                className={`${orangePrimary} text-white font-semibold py-4 px-8 rounded-lg shadow-xl transition duration-300 whitespace-nowrap`}
              >
                Book Appointment
              </a>
              
               <a 
                href="tel:8889090909" 
                className="flex items-center justify-center gap-2 bg-white text-gray-900 font-bold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.9/5</span>
              </div>
              
              <div className="h-6 w-px bg-gray-300"></div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">1000+ Happy Customers</span>
              </div>
            </div>
            
          </div>
            
          {/* Right Image Container - Simplified for better flow */}
          {/* The image styling will handle the positioning directly */}
        </div>
      </div>

      {/* 🔑 Image positioned absolutely outside of the main flex container for precise placement */}
      <img 
        src={carphoto}
        alt="White sports car for repair" 
        // 👇 Key Positioning Classes
        className="hidden lg:block absolute bottom-20 right-0 h-full w-auto object-cover object-center max-w-none"
        style={{ width: '400px', height: '450px', minWidth: '350px', transform: 'translateX(0%)' }} // Fine-tuning for the cropped look
      />
      <Chatbot />
    </div>

  );
};

export default Hero;