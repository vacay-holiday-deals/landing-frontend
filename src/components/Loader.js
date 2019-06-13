import React from "react";
import Loader from "react-loader-spinner";

function Load() {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color="#0068b3" height={500} width={500} />
    </div>
  );
}

export default Load;
