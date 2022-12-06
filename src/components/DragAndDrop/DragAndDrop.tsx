import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import upload from "../../assets/upload.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledTypography } from "../../components/Styled/StyledComponent";
import Cookies from "js-cookie";
import Alert from "../ConfirmAlert/Alert";
import { LOADING_DATA, SET_ERROR } from "../../redux/types";
import { useDispatch } from "react-redux";

export const DragAndDrop = () => {
  const [file, setFile] = useState<Blob | string>();
  const [alert, setAlert] = useState(false)
  const [isUploading,setIsUploading]=useState(false)
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_API;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true)
    const formData = new FormData();
    formData.append("csvFile", file!);
     dispatch({ type: LOADING_DATA });
    try {
      const auth_token = Cookies.get("auth_token");
      await axios({
        method: "post",
        url: `${BASE_URL}/api/employees/create-bulk`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth_token}`,
        },
      });
      setFile(undefined);
      (event.target as HTMLFormElement)?.reset();
      setAlert(true);
    } catch (error) {
      //handle error
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response?.status
          }: Error occured while Adding Employee Details`,
      });
    }
    setIsUploading(false)
  };
  const setNavigate = () => {
    navigate(`/admin/employee`);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (file?.size! < 10000000 && file?.type === "text/csv") {
      setFile(file);
    } else {
      e.target.value = "";
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={upload} alt="upload" />
        {alert && (
          <Alert
            title="Employee added successfully"
            setNavigate={setNavigate}
          />
        )}
        <StyledTypography>Upload CSV</StyledTypography>
        <form
          id="fileUploadForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            id="file"
            name="csv"
            onChange={handleChange}
            style={{ marginLeft: "5rem" }}
            type="file"
            accept=".csv,text/csv"
            required
          />
          <Box>
            <Button
              sx={{ margin: { md: "2rem 8rem" } }}
              size="large"
              type="submit"
              variant="contained"
              disabled={isUploading}
            >
             {isUploading ? <CircularProgress color="secondary" size={25} /> : "Upload CSV"}
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

