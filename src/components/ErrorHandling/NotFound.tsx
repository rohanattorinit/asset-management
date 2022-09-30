import React from "react";
import imageNotFound from "../../assets/404.gif";
function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={imageNotFound} alt="404" />
    </div>
  );
}
export default NotFound;
