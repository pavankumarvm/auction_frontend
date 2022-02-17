import * as React from "react";

const Location: React.FC = () => {
  return (
    <div className="location col">
      <div className="row">
        {/* How to change your own map point
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
            4. Copy only URL and paste it within the src="" field below */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.7368386688757!2d73.82450602915682!3d18.43827067147541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295ca117fc0b1%3A0xfb99b6691a1f2c87!2sSaidatt%20Heights!5e1!3m2!1sen!2sin!4v1644765427371!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
