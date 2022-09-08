import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
//import mainLogo from "../utils/1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login(props: any) {
  /*States Creation */
  const [errMsg, setErrMsg] = useState(false);
  const [credentials, setCredentials] = useState({
    userName: "",
    userPassword: "",
  });
  /*History Variable */
  const navigate = useNavigate();

  /*Onchange Handler */
  const setDataToState = (e: any) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  /*Submit handler function to handle data after form submission*/
  const submitHandler = (e: any) => {
    e.preventDefault();
    fetch("https://mocki.io/v1/9410a329-3bfe-4b17-ad9b-2fc1427cb8be")
      .then((response) => response.json())
      .then((res) => {
        // console.log(res)
        //  console.log(history)
        if (res.status === "200") {
          setErrMsg(false);
          // var credentialsObj = {
          //   userName: "john",
          //   isAdmin: false,
          // };
          // navigate(`/dash/${JSON.stringify(credentialsObj)}`);
          navigate(`/employee`);
        } else {
          // alert("Login Get Fail")
          setErrMsg(true);
        }
      });
  };

  return (
    <>
      <Box
        sx={{
          width: "50%",
          height: "600px",
          backgroundColor: "#cbcbcb",
          margin: "3% auto",
        }}
      >
        <form
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={submitHandler}
        >
          {/* <img
            src={mainLogo}
            alt=""
            style={{ width: "280px", height: "77px", marginBottom: "55px" }}
          /> */}
          <div style={{ display: "flex", width: "500px" }}>
            <PersonIcon style={{ fontSize: "50px", color: "grey" }} />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Name"
              name="userName"
              style={{ background: "white", outline: "none", width: "100%" }}
              value={credentials.userName}
              onChange={setDataToState}
            />
          </div>
          <br />
          <br />
          <div style={{ display: "flex", width: "500px" }}>
            <LockIcon style={{ fontSize: "50px", color: "grey" }} />
            <TextField
              type="password"
              id="demo-helper-text-misaligned-no-helper"
              label="Password"
              name="userPassword"
              style={{ background: "white", outline: "none", width: "100%" }}
              value={credentials.userPassword}
              onChange={setDataToState}
            />
          </div>
          {errMsg ? (
            <p style={{ color: "red" }}>Credentials didn't match</p>
          ) : (
            ""
          )}
          <div style={{ marginTop: "50px" }}>
            <Button type="submit" variant="contained">
              Log In
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
}

export default Login;
