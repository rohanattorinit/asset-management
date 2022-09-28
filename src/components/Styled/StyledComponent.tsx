import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)`
  fontweight: "bold";
  fontsize: "1.25rem";
  margin: "10px";
  color: "grey";
`;

export const StlyedGrid = styled(Grid)`
  display: "flex";
  justifycontent: "center";
  alignitems: "center";
  width: "250px";
  height: "244px";
  border: "2px solid black";
  borderradius: "10px";
  backgroundcolor: "#CBCBCB";
  cursor: "pointer";
  margin: "10px";
`;

export const StlyedGridContainer = styled(Container)`
// display: "flex";
// justifyContent="center";
my={3};
`;

export const SideNavGrid = styled(Grid)`
bgcolor: "#011E41",
borderTop: "solid white 2px",
display: "inline-block",
verticalAlign: "top",
overflow: "auto",
height: "100%",
`;
export const OuterBox = styled(Box)`
  background: #f4f4f4;
  minheight: 100vh;
`;
