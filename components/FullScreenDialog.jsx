'use client';
import { forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide style={{zIndex: 999999}}cdirection="up" ref={ref} {...props} />;
});

const FullScreenDialog = (props) => {

    const {handleOpen, isOpen, children} = props;


  return (
      <Dialog
        fullScreen
        open={isOpen}
        onClick={handleOpen}
        TransitionComponent={Transition}>
            {children}
      </Dialog>
  );
}

export default FullScreenDialog;
