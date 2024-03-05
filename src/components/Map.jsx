import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item rounded-2"
          width={"100%"}
          height={"180px"}
          title="موقع الشركة"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.16616192093022!2d39.71561817797002!3d21.403343557539532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21943386d0bf1%3A0x91ff8d57deb53f8a!2z2YXYsdmD2LIg2KfZhNi02K7YtdmK2KfYqiDYp9mE2YXZh9mF2KkgViBJIFA!5e0!3m2!1sar!2seg!4v1709622616007!5m2!1sar!2seg"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
