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


function FeeStructure() {
    var subjectName = ['English', 'Maths', 'Physics', 'Chemistry', 'Biology'];
    var studentName = ['Student 1', 'Student 2', 'Student 3'];

    return (
        <div className="record">
            <div className="newRecord">
                <div className="header">
                    <Link to="/">
                        <img src="https://web.classplusapp.com/newApp/static/media/backArrow.dd0baef1.svg" alt="left-arrow" />
                    </Link>
                    <h2>Create Fee Structure</h2>
                </div>
                <div className="form">
                    <div className="firstRow">
                        <TextField autoComplete="off" id="outlined-basic" label="Structure Name" variant="outlined" />
                        <TextField autoComplete="off" id="outlined-basic" label="Fee Amount" variant="outlined" />
                        <TextField autoComplete="off" id="outlined-basic" label="Tax %" variant="outlined" />
                    </div>
                    <div className="secondRow">
                        <TextField autoComplete="off" id="outlined-basic" label="Total Amount" variant="outlined" />
                        <TextField autoComplete="off" id="outlined-basic" label="No.of Installments" variant="outlined" />
                        <p style={{fontSize: "1.2em"}}>Tax Amount: Rs. 0.00</p>
                    </div>
                    <div className="fourthRow">
                        <Button variant="contained">Create InstallMents</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeeStructure;