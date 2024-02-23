import React from "react";
import { ReactDOM } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, FormGroup, MenuItem, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs({title, arr}) {
  const [open, setOpen] = React.useState(false);
  const [batchName, setBatchName] = React.useState("");
  const [studentName, setStudentName] = React.useState("");
  var batchNameSet = new Set();

  const handleClickOpen = () => {
        setOpen(true);
  };
  const handleClose = (title) => {
      if (title === "Batch Name") {
        var name = "";
        batchNameSet.forEach(val => {
            name += val + " "
        });
        setBatchName(name);
      } else {
        var name = "";
        batchNameSet.forEach(val => {
            name += val + " "
        });
        setStudentName(name);
      }
      setOpen(false);
  };

  const handleBatchNameCheck = (name) => {
    if (batchNameSet.has(name)) {
        batchNameSet.delete(name)
    } else {
        batchNameSet.add(name);
    }
  }

  return (
    <div>
        {title==="Batch Name" ? <TextField autoComplete="off" id="outlined-basic" label={title} variant="outlined" onClick={handleClickOpen} value={batchName} />: <TextField autoComplete="off" id="outlined-basic" label={title} variant="outlined" onClick={handleClickOpen} value={studentName} />}      
      <BootstrapDialog
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Select Batch
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormGroup>
              {arr.map((val) => {
                    return <FormControlLabel control={<Checkbox onClick={() => handleBatchNameCheck(val)} />} label={val} />    
              })}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => handleClose(title)}>
            Done
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


function NewRecord() {
    var subjectName = ['English', 'Maths', 'Physics', 'Chemistry', 'Biology'];
    var studentName = ['Student 1', 'Student 2', 'Student 3'];

    return (
        <div className="record">
        <div className="newRecord">
            <div className="header">
                <Link to="/">
                    <img src="https://web.classplusapp.com/newApp/static/media/backArrow.dd0baef1.svg" alt="left-arrow" />
                </Link>
                <h2>Student payment record</h2>
            </div>
            <div className="form">
                <div className="firstRow">
                    <CustomizedDialogs title="Batch Name" arr={subjectName} />
                    <CustomizedDialogs title="Student Name" arr={studentName} />
                    <TextField autoComplete="off" id="outlined-basic" label="Course Name" variant="outlined" />
                </div>
                <div className="secondRow">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Joining Date(DOJ)"
                            inputFormat="dd/MM/yyyy"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <TextField autoComplete="off" id="outlined-basic" label="Fee Structure" variant="outlined" />
                    <TextField autoComplete="off" id="outlined-basic" label="Discount(in Rs.)" variant="outlined" />
                </div>
                <div className="thirdRow">
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Internet Handling Fee by"
                    style={{width: "250px"}}
                >
                    {['Tutor', 'Student'].map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                </TextField>
                </div>
                <div className="fourthRow">
                    <Button variant="contained">Create InstallMents</Button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NewRecord;