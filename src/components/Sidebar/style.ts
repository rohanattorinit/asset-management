import styled from "styled-components";
import { makeStyles } from "@mui/material";
import { Box, Grid } from "@mui/material";
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
export const useStyles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    background: "#FFB91E",
    borderRadius: "5px",
    fontSize: "17px",
    lineHeight: "21.33px",
    color: "#232120",
    fontFamily: "faktumRegular",
    textTransform: "capitalize",
    width: "460px",
    "@media (max-width: 600px)": {
      width: "100%",
    },
    "&:hover": {
      background: "#FFB91E",
    },
  },
});
