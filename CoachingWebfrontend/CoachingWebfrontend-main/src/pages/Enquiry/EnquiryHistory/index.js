import {
  Grid, Paper, Typography,
  IconButton, Button, Divider,
  Dialog, DialogContent, MenuItem,
  TextField, Checkbox, Radio, RadioGroup,
  FormControlLabel
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NoteIcon from '@mui/icons-material/Note';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import '../style.css';
import { DesktopDatePicker, LocalizationProvider, MobileTimePicker } from '@mui/lab';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: 'pointer'
  }
}));


export const EnquiryHistory = (props) => {

  const [editEnquiry, setEdit] = React.useState(false);

  const [enquiryDate, setDate] = React.useState(new Date());

  const EidtEnquiry = () => {
    return (
      <>
        <Dialog open={editEnquiry} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Edit Enquiry
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setEdit(false)}>
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
                      defaultValue={"test"}
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
                      defaultValue={"9899819543"}
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
                      defaultValue={"Vaibhav Goel"}
                      placeholder="Enter student name"
                    >
                      <MenuItem value="Vaibhav Goel">Vaibhav Goel</MenuItem>
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
                      defaultValue={"s"}
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
                      defaultValue={"Justdial"}
                      select
                      placeholder="Select Source"
                    >
                      <MenuItem value="Justdial">Justdial</MenuItem>
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
                      Enquiry Status *
                    </Typography>
                    <TextField
                      size="small"
                      variant="outlined"
                      color="info"
                      margin="dense"
                      fullWidth
                      select
                      defaultValue={"hii"}
                      placeholder="Select Status"
                    >
                      <MenuItem value="hii"><Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#aaf59b" }} /> Hight Interest </Box></MenuItem>
                      <MenuItem><Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#0084c1" }} /> Medium Interest </Box></MenuItem>
                      <MenuItem><Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#9a0909" }} /> Low Interest </Box></MenuItem>
                      <MenuItem><Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#9a0909" }} /> Converted </Box></MenuItem>
                      <MenuItem><Box sx={{ display: 'flex', alignItems: 'center' }}><Box sx={{ mr: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#9a0909" }} /> Lost </Box></MenuItem>
                    </TextField>
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
                Update
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  const [status, setStatus] = React.useState(false);

  const [enquiryTime, setTime] = React.useState(new Date());

  const classes = useStyles();

  const UpdateStatus = () => {
    return (
      <>
        <Dialog open={status} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
              <Box sx={{ width: 'fit-content', ml: 'auto', mr: 3 }}>
                <Typography variant="body2">
                  Update Activity Status
                </Typography>
              </Box>
              <Box sx={{ width: 'fit-content', ml: 'auto' }}>
                <IconButton size="small" onClick={() => setStatus(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2, my: 2, borderBottom: 1, borderColor: "#cdcdcd" }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mx: 2, }}>
                  <LocalPhoneIcon color="success" fontSize="small" />
                  <Typography variant="subtitle1">
                    Scheduled Call
                  </Typography>
                </Box>
                <Box sx={{ mx: 2 }}>
                  <Typography variant="caption" color="gray">
                    13 Oct 2021 12:59 am
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mx: 4 }}>
              <RadioGroup
                aria-label="gender"
                defaultValue="Mark as done"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Mark as done" control={<Radio color="default" size="small" />} label="Mark as done" />
                <FormControlLabel value="Mark as miss" control={<Radio color="default" size="small" />} label="Mark as miss" />
              </RadioGroup>
            </Box>
            <Box sx={{ width: 'fit-content', mx: 'auto', py: 2 }}>
              <Button
                color="info"
                size="small"
                variant="contained"
              >
                Update
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  const [schedule, setDemo] = React.useState(false);

  const ScheduleDemo = () => {
    return (
      <>
        <Dialog open={schedule} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Create followup activity
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setDemo(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ my: 4, px: 2, mx: 'auto', width: '300px' }}>
              <Typography variant="caption" color="gray" display="block">
                Select Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="MM/dd/yyyy"
                  value={enquiryDate}
                  onChange={setDate}
                  renderInput={(params) => <TextField {...params} variant="outlined" fullWidth size="small" margin="dense" />}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ px: 2, mx: 'auto', width: '300px' }}>
              <Typography variant="caption" color="gray" display="block">
                Select Time
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileTimePicker 
                  value={enquiryTime}
                  onChange={setTime}
                  renderInput={(params) => <TextField {...params} variant="outlined" fullWidth size="small" margin="dense" />}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ mx: 'auto', width: '350px', py: 3, pb: 5 }}>
              <Button
                color="info"
                variant="contained"
                fullWidth
                sx={{ textTransform: 'none' }}
              >
                Schedule Demo
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <Grid container justifyContent={"end"}>
        <Grid item xs={7}>
          <Box sx={{ my: 6 }}>
            <Paper>
              <Box sx={{ p: 4 }}>
                <Grid container>
                  <Grid item xs={10}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton sx={{ mr: 2 }} onClick={() => props.back()}>
                        <ArrowBackIcon />
                      </IconButton>
                      <Typography variant="subtitle1">
                        test
                      </Typography>
                      <Box sx={{ mx: 1, height: 15, width: 15, borderRadius: '50%', display: 'flex', backgroundColor: "#aaf59b" }} />
                      High Interest
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box sx={{ ml: 'auto', width: 'fit-content' }}>
                      <Button
                        color="info"
                        size="small"
                        variant="text"
                        onClick={() => setEdit(true)}
                      >
                        Edit
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ px: 3, pb: 1, display: 'flex', alignItems: "center", width: 'fit-content', ml: 'auto' }}>
                      <Typography variant="body2" color="gray">
                        Class and Subject -
                      </Typography>
                      <Typography variant="body2">
                        {" "} {"Math"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ px: 3, pb: 1, display: 'flex', alignItems: "center", width: 'fit-content', ml: 'auto' }}>
                      <Typography variant="body2" color="gray">
                        Source -
                      </Typography>
                      <Typography variant="body2">
                        {" "} {"Justdial"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box sx={{ px: 3, pb: 1, display: 'flex', alignItems: "center", width: 'fit-content', ml: 'auto' }}>
                      <Typography variant="body2" color="gray">
                        Contact no -
                      </Typography>
                      <Typography variant="body2">
                        {" "} {"+91 9899819543"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ px: 3, py: 3, display: 'flex', alignItems: "center" }}>
                      <Typography variant="body2" color="gray">
                        Assigned To -
                      </Typography>
                      <Typography variant="body2">
                        {" "} {"Vaibhav Goel"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ px: 3 }}>
                      <Divider light />
                      <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                        <NoteIcon sx={{ mr: 2 }} color="disabled" />
                        <Typography color="gray" variant="body2">
                          Notes
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ px: 3 }}>
                      <Typography color="gray" sx={{ py: 2 }} variant="body2">
                        No notes are found
                      </Typography>
                      <Divider light />
                      <Typography color="gray" sx={{ py: 2, display: "flex", alignItems: "center" }} variant="body2">
                        <SportsScoreIcon fontSize="small" sx={{ mr: 1 }} color="disabled" /> Followup Activity
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', px: 3, py: 2, borderRadius: 2, mx: 2, my: 2, border: 1, borderColor: "#cdcdcd", borderLeft: 4, borderLeftColor: "#2e7d32" }}>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 2, }}>
                          <LocalPhoneIcon color="success" fontSize="small" />
                          <Typography variant="subtitle1">
                            Scheduled Call
                          </Typography>
                        </Box>
                        <Box sx={{ mx: 2 }}>
                          <Typography variant="caption" color="gray">
                            13 Oct 2021 12:59 am
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ width: 'fit-content', ml: 'auto' }}>
                        <Button
                          sx={{ textTransform: 'none' }}
                          size="small"
                          color="info"
                          onClick={() => setStatus(true)}
                        >
                          Update status
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ mb: 4, px: 3 }}>
                      <Typography variant="caption" color="gray">
                        Add a followup Activity
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={classes.card} onClick={() => setDemo(true)} sx={{ ml: 3, display: 'flex', alignItems: 'center', border: 1, p: 2, borderColor: '#cdcdcd', borderRadius: 2 }}>
                      <LocalPhoneIcon color="success" />{" "} Call
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={classes.card} onClick={() => setDemo(true)} sx={{ display: 'flex', alignItems: 'center', mx: 2, p: 2, border: 1, borderColor: '#cdcdcd', borderRadius: 2 }}>
                      <LiveTvIcon color="warning" />{" "} Demo
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={classes.card} onClick={() => setDemo(true)} sx={{ mr: 3, display: 'flex', alignItems: 'center', border: 1, p: 2, borderColor: '#cdcdcd', borderRadius: 2 }}>
                      <PeopleOutlineIcon color="info" />{" "} Counselling
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ mt: 6, mb: 2, mx: 3 }}>
            <Paper>
              <Typography sx={{ p: 1, fontWeight: 100 }} variant="h6">
                Enquiry History
              </Typography>
              <Divider light />
              <Box sx={{ px: 3, pt: 2, pb: 10, my: 2, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ border: 2, borderColor: '#cdcdcd', height: '100px', mx: 3 }} />
                <Box>
                  <Typography variant="subtitle1">
                    Enquiry
                  </Typography>
                  <Typography display="block" variant="subtitle1">
                    Created
                  </Typography>
                  <Typography variant="h5" color="gray">
                    4th Oct
                  </Typography>
                  <Typography variant="h5" color="gray">
                    21
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mx: 3 }}>
            <Button
              color="info"
              variant="contained"
              size="small"
            >
              Add to Batch
            </Button>
            <Box sx={{ width: 'fit-content', ml: 'auto' }}>
              <Button
                color="info"
                variant="outlined"
                size="small"
              >
                Send Messages
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {editEnquiry && EidtEnquiry()}
      {status && UpdateStatus()}
      {schedule && ScheduleDemo()}
    </>
  )
}