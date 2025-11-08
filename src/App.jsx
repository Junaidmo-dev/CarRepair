import Topbar from "./components/Topbar"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Services from "./components/Services";
import ContactLocation from "./components/ContactLocation";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar/>
      <NavBar />
      
      {/* Add IDs to your sections */}
      <div id="home">
        <Hero/>
      </div>
      
      <div id="about">
        <About/>
      </div>
      
      <div id="services">
        <Services/>
      </div>
      
      <div id="contact">
        <ContactLocation/>
      </div>
      
      <div id="appointment">
        <Appointment/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;