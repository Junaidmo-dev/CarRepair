import { InlineWidget } from "react-calendly";

const Appointment = () => {
  return (
    <div id="appointment" className="w-full h-screen overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <InlineWidget 
          url="https://calendly.com/badboymj972/30min"
          styles={{
            height: '100%',
            overflow: 'hidden'
          }}
        />
      </div>
    </div>
  );
};

export default Appointment;