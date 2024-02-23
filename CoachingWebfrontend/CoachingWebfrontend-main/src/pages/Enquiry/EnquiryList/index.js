import {
  Grid, Typography, InputBase,
  Button, Grow, Paper, Popper,
  MenuItem, ClickAwayListener,
  MenuList, Menu, Checkbox, Divider,
  IconButton, Dialog, DialogContent, TextField
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { DesktopDatePicker, LocalizationProvider, MobileTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import '../style.css';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  card: {
    cursor: 'pointer'
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '40ch',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    fontSize: 14,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '40ch',
  },
}));

export const EnquiryList = (props) => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const EnquiryLists = [
    {
      name: 'Vaibhav Goel',
      assign: "Self(Vaibhav Goel)",
      followup: "call",
      date: '12:59 am 13th Oct, 2021',
      subject: 'S',
      interest: "Hight Interest",
    },
    {
      name: 'Baswaraj',
      assign: "Varshit",
      followup: "counselling",
      date: '12:00 pm 14th Oct, 2021',
      subject: 'Maths',
      interest: "Hight Interest",
    },
    {
      name: 'Test',
      assign: "Varshit",
      followup: "demo",
      date: '12:00 pm 6th Oct, 2021',
      subject: 'Maths',
      interest: "Medium Interest",
    },
    {
      name: 'Baswaraj',
      assign: "Varshit",
      followup: "counselling",
      date: '12:00 pm 14th Oct, 2021',
      subject: 'Maths',
      interest: "Hight Interest",
    },
    {
      name: 'Test',
      assign: "Varshit",
      followup: "demo",
      date: '12:00 pm 6th Oct, 2021',
      subject: 'Maths',
      interest: "Medium Interest",
    },
  ]

  const [deleteEnquiry, setDelete] = React.useState(false);

  const DeleteEnquiry = () => {
    return (
      <>
        <Dialog open={deleteEnquiry} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Are you sure about deleting this enquiry?
              </Typography>
            </Box>
            <Divider light />
            <Box sx={{ my: 2, mx: 2 }}>
              <Typography variant="body2">
                Proceed only if you are very sure
              </Typography>
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: "#cdcdcd", display: 'flex', alignItems: 'center' }}>
              <Button
                color="inherit"
                variant="contained"
                sx={{ ml: 'auto', textTransform: 'none' }}
                size="small"
                onClick={() => setDelete(false)}
              >
                Cancel
              </Button>
              <Button
                color="info"
                variant="contained"
                sx={{ ml: 2, textTransform: 'none' }}
                size="small"
              >
                Delete Enquiry
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  const [addEnquiry, setAdd] = React.useState(false);

  const [enquiryDate, setDate] = React.useState(new Date());

  const [enquiryTime, setTime] = React.useState(new Date());


  const AddEnquiry = () => {
    return (
      <>
        <Dialog open={addEnquiry} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  New Enquiry
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setAdd(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ my: 2, px: 2 }} id="AddEnquiry">
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Student name*
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth
                      placeholder="Enter student name"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Phone number*
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      fullWidth
                      margin="dense"
                      placeholder="Enter phone number"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Enquiry Date *
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={enquiryDate}
                        onChange={setDate}
                        renderInput={(params) => <TextField {...params} variant="outlined" size="small" margin="dense" />}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Assign Lead *
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth
                      select
                      placeholder="Enter student name"
                    >
                      <MenuItem>Vaibhav Goel</MenuItem>
                      <MenuItem>Bn</MenuItem>
                      <MenuItem>5355 343</MenuItem>
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Class and Subject (optional)
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth 
                      placeholder="eg: Physics"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Source
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth
                      select
                      placeholder="Select Source"
                    >
                      <MenuItem>Justdial</MenuItem>
                      <MenuItem>Sulekha</MenuItem>
                      <MenuItem>Hoardings</MenuItem>
                      <MenuItem>Online Marketing</MenuItem>
                      <MenuItem>Reference</MenuItem>
                      <MenuItem>Others</MenuItem>
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Followup type*
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth
                      select
                      placeholder="Select Source"
                    >
                      <MenuItem><LocalPhoneIcon color="success" />{" "} Call</MenuItem>
                      <MenuItem><LiveTvIcon color="warning" />{" "} Demo</MenuItem>
                      <MenuItem><PeopleOutlineIcon color="info" />{" "} Counselling</MenuItem>
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Enquiry Status *
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth
                      select
                      placeholder="Select Status"
                    >
                      <MenuItem><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#aaf59b" }} /> Hight Interest</MenuItem>
                      <MenuItem><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#0084c1" }} /> Medium Interest</MenuItem>
                      <MenuItem><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#9a0909" }} /> Low Interest</MenuItem>
                      <MenuItem><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#9a0909" }} /> Converted</MenuItem>
                      <MenuItem><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#9a0909" }} /> Lost</MenuItem>
                    </TextField>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Followup Date *
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={enquiryDate}
                        onChange={setDate}
                        renderInput={(params) => <TextField {...params} variant="outlined" size="small" margin="dense" />}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Followup Time *
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileTimePicker
                        value={enquiryTime}
                        onChange={(newValue) => {
                          setTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} fullWidth variant="outlined" size="small" margin="dense" />}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="caption" color="gray" sx={{ py: 2 }}>
                      Notes (optional)
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      fullWidth
                      margin="dense"
                      multiline
                      rows={2}
                      placeholder="Enter school eg."
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: "#cdcdcd", display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: "flex", alignItems: "center", fontSize: 14, ml: 'auto', width: 'fit-content' }}>
                <Checkbox color="info" size="small" sx={{ mr: 1 }} /> send SMS
              </Box>
              <Button
                color="info"
                variant="contained"
                sx={{ ml: 2, textTransform: 'none' }}
                size="small"
              >
                Create Enquiry
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <Box sx={{ display: 'flex', alignItems: 'center', mx: 3, mt: 6, mb: 3 }}>
            <Box sx={{ mr: 1 }}>
              <Typography variant="body2">
                Enquiries(5)
              </Typography>
            </Box>
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search For an Enquiry.."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Button
                ref={anchorRef}
                id="composition-button"
                sx={{ textTransform: 'none' }}
                variant="contained"
                color="info"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                New Enquiry <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={(event) => { setAdd(true); handleClose(event) }}>Create Enquiry</MenuItem>
                          <MenuItem onClick={handleClose}>Bulk Upload</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: "center", mx: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox size="small" />
              <Typography variant="body2">
                Selected(0)
              </Typography>
            </Box>
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
              <AssignmentIcon sx={{ p: 1 }} />
              <Box sx={{ display: 'block' }}>
                <Typography variant="body2" display="block">
                  Assign
                </Typography>
                <Typography variant="body2">
                  Lead
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
              <ChatBubbleOutlineIcon sx={{ p: 1 }} />
              <Box sx={{ display: 'block' }}>
                <Typography variant="body2" display="block">
                  Send
                </Typography>
                <Typography variant="body2">
                  SMS
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DeleteOutlineIcon sx={{ p: 1 }} />
              <Box sx={{ display: 'block' }}>
                <Typography variant="body2" display="block">
                  Delete
                </Typography>
                <Typography variant="body2">
                  Enquiry
                </Typography>
              </Box>
            </Box>
          </Box>
          {EnquiryLists.map((enquiry, index) => (
            <Box sx={{ m: 3 }} key={index} >
              <Paper>
                <Grid container>
                  <Grid item xs={12} md={1}>

                  </Grid>
                  <Grid item xs={12} md={10} className={classes.card} onClick={() => props.history()}>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ px: 3, pt: 3, pb: 1, display: 'flex', alignItems: "center" }}>
                          <Typography variant="h6">
                            {enquiry.name}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ px: 3, pt: 3, pb: 1, display: 'flex', alignItems: "center", width: 'fit-content', ml: 'auto' }}>
                          {enquiry.interest === "Hight Interest" && <Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#aaf59b" }} />}
                          {enquiry.interest === "Medium Interest" && <Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#0084c1" }} />}
                          <Typography variant="body2">
                            {enquiry.interest}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ px: 3, pb: 1, display: 'flex', alignItems: "center" }}>
                          <Typography variant="body2" color="gray">
                            Assigned To -
                          </Typography>
                          <Typography variant="body2">
                            {" "} {enquiry.assign}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ px: 3, pb: 1, display: 'flex', alignItems: "center", width: 'fit-content', ml: 'auto' }}>
                          <Typography variant="body2" color="gray">
                            Class and Subject -
                          </Typography>
                          <Typography variant="body2">
                            {" "} {enquiry.subject}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Box sx={{ px: 3, pb: 3, display: 'flex', alignItems: "center" }}>
                          <Typography variant="body2" color="gray">
                            Followup Type -
                          </Typography>
                          <Typography variant="body2">
                            {" "} {enquiry.followup}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <Box sx={{ px: 3, pb: 3, display: 'flex', alignItems: "center", width: 'fit-content', ml: 'auto' }}>
                          <Typography variant="body2" color="gray">
                            Followup Date & Time -
                          </Typography>
                          <Typography variant="body2">
                            {" "} {enquiry.date}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Box sx={{ pt: 2 }}>
                      <IconButton
                        aria-label="more"
                        id={'long-button' + index}
                        aria-controls={"long-menu" + index}
                        aria-expanded={openMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        size="small"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id={"long-menu" + index}
                        MenuListProps={{
                          'aria-labelledby': 'long-button' + index,
                        }}
                        elevation={1}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                      >
                        <MenuItem onClick={(event) => { setDelete(true); handleCloseMenu(); }}>
                          <DeleteIcon fontSize="small" sx={{ mr: 2 }} /> Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          ))}
        </Grid>
      </Grid>
      {deleteEnquiry && DeleteEnquiry()}
      {addEnquiry && AddEnquiry()}
    </>
  )
}