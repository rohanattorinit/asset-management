import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import React from "react";
import LoadingImg from "../../assets/Loader.gif";

function Loader() {
  return (
    <>
      {/* <img
        src={LoadingImg}
        alt="loader"
        style={{
          objectFit: "cover",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      /> */}
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CircularProgress size={50} />
      </Box>
    </>
  );
}

export default Loader;
