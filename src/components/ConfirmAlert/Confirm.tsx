import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { makeStyles, Theme } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
interface Iprops {
  title: string;
  handleOk: () => void;
  handlecancel: () => void;
}

export default function Confirm(props: Iprops) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    props.handlecancel();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ width: "300px" }}>{props.title}</DialogTitle>

        <DialogActions>
          <Button onClick={props.handleOk}>OK</Button>
          <Button onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
