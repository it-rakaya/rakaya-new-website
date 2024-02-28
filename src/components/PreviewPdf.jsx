import React from "react";
import ViewICon from "./icons/ViewICon";

function PreviewPdf({ href }) {
  return (
    <div>
      <a
        href={href}
        download={href}
        className=""
        target="_blank"
        rel="noreferrer"
      >
        <ViewICon className="" />
      </a>
    </div>
  );
}

export default PreviewPdf;
