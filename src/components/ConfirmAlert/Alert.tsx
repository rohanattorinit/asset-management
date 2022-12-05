import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide ref={ref} {...props} />;
});

interface Iprops {
    title:string,
    setNavigate: ()=> void
}

export default function Alert(props:Iprops) {
  
  const handleClose = () => {
    props?.setNavigate()

  };

  return (
    <>
     
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
            style: {
              backgroundColor: '#f3f4f6',
              boxShadow: '2',
            },
          }}
          sx={{
            backdropFilter: "blur(7px)",
            
          }}
      >
        <DialogTitle>{props.title}</DialogTitle>
        
        <DialogActions>
          
          <Button variant="outlined" onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}