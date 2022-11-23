import * as React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export default function Toast() {
  const [open, setOpen] = React.useState<boolean>(false);



  const {
    employee: { error },
    admin: { error: adminError },
  } = useSelector((state: RootStore) => state);

  

  useEffect(() => {
    if (error?.trim()?.length || adminError?.trim()?.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [error, adminError]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
  );
}
