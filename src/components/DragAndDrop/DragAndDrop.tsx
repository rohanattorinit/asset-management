import { useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import upload from "../../assets/upload.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DragAndDrop = () => {
  const StyledTypography = styled(Typography)({
    fontWeight: "bold",
    fontSize: "1.25rem",
    margin: "10px",
    color: "grey",
  });

  const [file, setFile] = useState<Blob | string>();
  let navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("csvFile", file!);
    try {
      await axios({
        method: "post",
        url: "http://localhost:4000/api/employees/create-bulk",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(undefined);
      (event.target as HTMLFormElement).reset();
      navigate(`/admin/employee`);
      alert("Employees added successfully");
    } catch (error) {
      //handle error
      console.log(error);
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
