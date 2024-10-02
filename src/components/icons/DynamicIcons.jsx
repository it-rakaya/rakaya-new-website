import React from "react";

function DynamicIcons({ icon }) {
  return (
    <div className="icon-dynamic" dangerouslySetInnerHTML={{ __html: icon }} />
  );
}

export default DynamicIcons;
