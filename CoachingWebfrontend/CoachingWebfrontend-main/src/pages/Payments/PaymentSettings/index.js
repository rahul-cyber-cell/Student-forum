import PropTypes from 'prop-types';
import { Button, TextField, Tooltip, FormGroup, FormControlLabel, Dialog, DialogActions, DialogContent, Checkbox, DialogTitle, styled, IconButton } from '@mui/material';
import React from 'react';
import { ReactDOM } from 'react';
import "./style.css";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

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

function CareTakerSettings() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div className='careTakerSettings'>
            <div className='careTakerHeading'>
                <p>CARE TAKER SETTINGS</p>
            </div>
            <div className='owner'>
                <p style={{color: "#979797"}}>OWNER</p>
                <div className='ownerDetails'>
                    <p data-letters="VG">Vaibhav Goel</p>
                    <p className='number'>+919560766005</p>
                </div>
            </div>
            <div className='careTaker'>
                <div className='careTakerFirstRow'>
                    <p style={{color: "#979797"}}>CARETAKER</p>
                    <div className='button'>
                        <Button variant='outlined' onClick={handleOpen} startIcon={<AddIcon />}>Add</Button>
                        <BootstrapDialog
                        fullWidth
                        maxWidth="sm"
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Add Care Taker
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                            <div className='addCareTaker'>
                                <div className='careTakerName'>
                                    <p>Care Taker Name</p>
                                    <TextField size='small' autoComplete='off' id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='mobileNumber'>
                                    <p>Mobile Number</p>
                                    <TextField size='small' autoComplete='off' id='outlined-basic' variant="outlined" />
                                </div>
                            </div>
                            </DialogContent>
                            <DialogActions>
                            <Button variant="contained" onClick={() => handleClose()}>
                                Add
                            </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </div>
                </div>
                <div className='careTakerDetails'>
                    <p data-letters="RG">Ritik Gupta</p>
                    <p className='number'>+919898989895</p>
                    <div className='remove-button'>
                        <Link style={{textDecoration: "none", color: "red"}}>Remove</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeeStructures() {
    const studentName = ["Batch-1", "Kanya", "Designing", "Fees"]
    return(
        <div className='feeStructures'>
            <div className='fesStructureHeading'>
                <p style={{color: "#979797"}}>FEE STRUCTURES</p>
                <div className='feeAddButton'>
                    <Link to="/feeStructure" style={{textDecoration: "none"}}>
                        <Button size='medium' variant='contained'>Add</Button>
                    </Link>
                </div>
            </div>
            <div className='studentDetails'>
                {studentName.map(val => {
                    return (<div className='row'>
                        <div className='studentName'>
                            <p>{val}</p>
                        </div>
                        <div className='studentEditButton'>
                            <Link style={{textDecoration: "none", color: "blue"}}>Edit</Link>
                        </div>
                        <div className='studentRemoveButton'>
                            <Button variant='link' startIcon={<DeleteIcon />} style={{textTransform: "none", backgroundColor: "white"}}>Remove</Button>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

function TaxDetails() {
    return (
        <div className='taxDetails'>
            <div className='taxDetailHeading'>
                <p style={{color: "#979797"}}>TAX DETAILS</p>
            </div>
            <div className='billingDetails'>
                <Tooltip style={{marginBottom: "5px", color: "black", backgroundColor: "#fff"}} title="Example: Stellar Academy" placement='top-start' arrow>
                    <Button>Billing Details</Button>
                </Tooltip>
                <TextField fullWidth autoComplete="off" id="outlined-basic" placeholder="Billing Details" variant="outlined" />
            </div>
            <div className='gstDetails'>
                <Tooltip style={{marginBottom: "5px", color: "black", backgroundColor: "#fff"}} title="Example: GSTIN 22 AAAAAA0000A 1 Z 5" placement='top-start' arrow>
                    <Button>GSTIN</Button>
                </Tooltip>
                <TextField fullWidth autoComplete="off" id="outlined-basic" placeholder="GST Number" variant="outlined" />
            </div>
            <div className='tax'>
                <Tooltip style={{marginBottom: "5px", color: "black", backgroundColor: "#fff"}} title="Example: 0" placement='top-start' arrow>
                    <Button>TAX (in %)</Button>
                </Tooltip>
                <TextField fullWidth autoComplete="off" id="outlined-basic" placeholder="Tax" variant="outlined" />
            </div>
            <div className='address'>
                <Tooltip style={{marginBottom: "5px", color: "black", backgroundColor: "#fff"}} title="Example: Mumbai" placement='top-start' arrow>
                    <Button>Address</Button>
                </Tooltip>
                <TextField fullWidth autoComplete="off" id="outlined-basic" placeholder="Address" variant="outlined" />
            </div>
            <div className='buttons'>
                <div className='saveButton'>
                    <Button variant="contained">Save</Button>
                </div>
                <div className='cancelButton'>
                    <Button variant="outlined" color="error">Cancel</Button>
                </div>
            </div>
        </div>
    )
}

function PaymentSettings() {
    return (
        <div className='paymentSettings'>
            <CareTakerSettings />
            <FeeStructures />
            <TaxDetails />
        </div>
    )
}

export default PaymentSettings;
