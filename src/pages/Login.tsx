import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Dispatch, useEffect, useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthAction";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { useNavigate } from "react-router-dom";

interface credential {
  email?: string;
  password?: string;
}

function Login() {
  const [loginCred, setLoginCred] = useState<credential>();

  const dispatch: Dispatch<any> = useDispatch();
  const { error, loading, authenticated, isAdmin } = useSelector(
    (state: RootStore) => state.login
  );
  let navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCred((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(loginCred));
  };

  useEffect(() => {
    authenticated && !isAdmin && navigate("/");
    authenticated && isAdmin && navigate("/admin");
  }, [authenticated, isAdmin, navigate]);

  return (
    <Box>
      <Typography variant="h4" my={4} textAlign="center">
        Login Details
      </Typography>
      <form className="box" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          required
          fullWidth
          onChange={handleChange}
          sx={{ marginBottom: 3 }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
          onChange={handleChange}
          sx={{ marginBottom: 3 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress color="secondary" size={25} /> : "Login"}
        </Button>
        <Typography mt={2} color="error">
          {error}
        </Typography>
      </form>
    </Box>
  );
}

export default Login;
