import React from "react";
import LoadingImg from "../../assets/Loader.gif";

function Loader() {
  return (
    <>
      <img
        src={LoadingImg}
        alt="loader"
        style={{
          objectFit:'cover',
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </>
  );
}

export default Loader;
