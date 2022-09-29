import { useState } from "react";
import { Box, Button } from "@mui/material";
import upload from "../../assets/upload.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledTypography } from "../../components/Styled/StyledComponent";
import Cookies from "js-cookie";
export const AssetCsv = () => {
  const [file, setFile] = useState<Blob | string>();
  let navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData?.append("csvFile", file!);
    try {
      const auth_token = Cookies.get("auth_token");
      await axios({
        method: "post",
        url: "http://localhost:4000/api/assets/create-bulk",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth_token}`,
        },
      });
      setFile(undefined);
      (event.target as HTMLFormElement)?.reset();
      navigate(`/admin/assets`);
      alert("Assets added successfully");
    } catch (error) {
      //handle error
      console.error(error);
    }
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
              sx={{ margin: "2rem 8rem" }}
              size="large"
              type="submit"
              variant="contained"
            >
              Upload CSV
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};
