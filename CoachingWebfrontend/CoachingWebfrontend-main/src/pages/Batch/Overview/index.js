import React,{useState} from 'react';
import PropTypes  from 'prop-types';
import './style.css';
import { OutlinedInput, Chip, TextField, InputAdornment, AccordionSummary, Button, Dialog, Divider, FormControl, Grid,IconButton,InputLabel,Menu,MenuItem,Paper, Select, Tab, Tabs, Typography} from '@mui/material';
import { Box } from '@mui/system';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import CategoryIcon from '@mui/icons-material/Category';
import { Close, Delete, FileCopy, LiveTvOutlined, MoreVertOutlined } from '@material-ui/icons';
import { ReactComponent as ZoomIcon } from '../../../svgicons/zoom-icon.svg';
import { PlayCircle } from '@mui/icons-material';
import {ReactComponent as AnnouncementIcon} from '../../../svgicons/announce.svg';
import {ReactComponent as CalenderIcon} from '../../../svgicons/calendar.svg';
import {connect, useDispatch} from 'react-redux';
import * as actions from '../../../actions/batch';


// Helper Components
function LongMenu(props) {
    const options = [
        'Duplicate Batch',
        'Remove Batch'
      ];
      
      const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertOutlined />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
            <MenuItem onClick={handleClose}>
               <FileCopy/> Duplicate Batch
            </MenuItem>
            <MenuItem onClick={()=>{props.removeBatch();handleClose()}}>
               <Delete/> Remove Batch
            </MenuItem>
        </Menu>
      </div>
    );
  }

  function MultipleSelectChip(props) {
    // const theme = useTheme();
    const [Subjects, setSubjects] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setSubjects(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={Subjects}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            
          >
            {props.subjects.map((subject) => (
              <MenuItem
                key={subject}
                value={subject}
                style={{}}
              >
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }


// Sections
function Batch(props) {
    const dispatch = useDispatch();
    const {data, ...other} = props;
    const {name, date, course, code, category, sub} = data;
    const {id} = data;
    return (
        <React.Fragment>
            <Box className="Heading">
                <Typography variant="h4">{name}</Typography>
                <Box className="btns">
                    <Button variant="outlined" onClick={props.editClick}>Edit</Button>
                    <LongMenu removeBatch = {()=>{dispatch(actions.deleteRequest(id))}}/>
                </Box>
            </Box>
        <div className="Batch__col">
            <div className="Batch__data">
            <CalendarTodayIcon />
            <span className="Batch__title">
                <p>Batch Start Date</p>
                {date}
            </span>
            </div>
            <div className="Batch__data">
            <ImportContactsIcon />
            <span className="Batch__title">
                <p>Course</p>
                {(course)?course:<p className="Batch__empty">Add Course</p>}
            </span>
            </div>
            <div className="Batch__data">
            <LibraryBooksIcon />
            <span className="Batch__title">
                <p>Subject</p>
                {(sub[0])?sub.map((subName) => 
                <p1>{subName}</p1>):<p className="Batch__empty">Add Subject</p>}
            </span>
            </div>
            <div className="Batch__data">
            <Grid3x3Icon />
            <span className="Batch__title">
                <p>Batch Code</p>
                {code}
            </span>
            </div>
            <div className="Batch__data">
            <CategoryIcon />
            <span className="Batch__title">
                <p>Category</p>
                {(category)?category:<p>No Category</p>}
            </span>
            </div>
        </div>
        </React.Fragment>
    )
}

function LiveClass(props){
    return (
        <Box className="LiveClass-dialog">
        <p>Live Classes</p>
        <Divider />
        <p>Now you can go live for your students & teach them anytime, anywhere!</p>

        <Button variant="outlined" startIcon={<LiveTvOutlined/>}>
            GO LIVE NOW
        </Button>
        </Box>
    )
}

function ZoomClass(props){
    return (
        <Box className="LiveClass-dialog">
        <p className="Heading"><ZoomIcon className="zoom-icon"/>Zoom Classes</p>
        <Divider />
        <p>Set up your zoom account from your institute mobile app</p>

        <Button variant="outlined" startIcon={<PlayCircle color="success"/>}>
            GO LIVE NOW
        </Button>
        </Box>
    )
}

function RecentAnnouncement(props){
    const emp = (
        <>
        <AnnouncementIcon className="Announcement-icon"/>
        <p>No Recent Announcements</p>
        </>
    );
    return (
        <Box className="Announcement-dialog">
        <Box className="Heading">
            <p>Recent Announcement</p>
            <Button variant="outlined">
                Create
            </Button>
        </Box>
        <Divider/>
        <Box className="Body">
            {(props.children)?props.children:emp}
        </Box>
        </Box>
    )
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
    
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function Timetable(props){
    const {sun,mon,tue,wed,thu,fri,sat} = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const empty = (
        <Box className="empty">
            {/* <CalenderIcon  className="ico"/> */}
            <p1>No Classes</p1>
            <p2> Click "Add" button to create classes</p2>
        </Box>
    )

    return (
        <>
        <Box className="Heading">
            <p>Batch Timings</p>
            <Button variant="outlined">
                +Add
            </Button>
        </Box>
        <Divider />
        <Box className="Body">
            <Tabs
            onChange={handleChange}
            value={value}
            variant = "fullWidth"
            sx = {{ display: 'flex'}}
            >
                <Tab label="Sunday"/>
                <Tab label="Monday"/>
                <Tab label="Tuesday"/>
                <Tab label="Wednesday"/>
                <Tab label="Thursday"/>
                <Tab label="Friday"/>
                <Tab label="Saturday"/>

                
            </Tabs>
            <TabPanel className="TabPanel" value={value} index={0}>
                {(sun)?sun:empty}
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={1}>
                {(mon)?mon:empty}
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={2}>
                {(tue)?tue:empty}
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={3}>
                {(wed)?wed:empty}
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={4}>
                {(thu)?thu:empty}
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={5}>
                {(fri)?fri:empty}
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={6}>
                {(sat)?sat:empty}
            </TabPanel>
            
        </Box>
        </>
    );
}

function LazyBox(props){
    return (
        <Box className="LazyBox">
             <Box className="Heading">
            <p>{props.heading}</p>
            <Button onClick={props.add} variant="outlined">+ Add {props.heading}</Button>
        </Box>
        <Divider />
        <Box className="Body">
            {
                (props.list.length===0)?
                (<p>Nothing to Show, Please Add Some {props.heading}</p>):
                props.list.map((obj) => (
                    <Box className="Overview__tile">
                            <n1>{obj.fullName}</n1>
                            <n2>{obj.mobileNumber}</n2>
                    </Box>
                ))
            }
        </Box>
        </Box>
    )
}

function AddDialog(props) {
    return (
        <Dialog open={props.state}
                fullWidth
                maxWidth={'lg'}>
                    <Box className="Dialog1">
                    <Close className="CloseBtn"/>
                    <Box className="Heading">
                        <Typography variant="h5">Add Student</Typography>
                    </Box>
                    <Divider />
                    <Box className="Body">
                        <Grid className="FormGrid" container fullWidth direction="row">
                            <Grid className="FormCol" item>
                                <TextField required fullWidth label="Full Name" variant="outlined"/><br />
                                {(props.heading==='Student')?(<TextField fullWidth label="Parent Name" variant="outlined"/>):''}
                            </Grid>
                            <Grid className="FormCol" item>
                                <TextField required fullWidth label="Mobile Number" variant="outlined"  InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}  /><br />
                                <TextField fullWidth label="Mobile Number" variant="outlined"  InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}/>
                            </Grid>
                            <Grid className="FormCol" item>
                                <TextField fullWidth label="Email" variant="outlined"/><br />
                                <TextField fullWidth label="Email" variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Box>
                    <p className="MandText">*Mandtory Fields</p>
                    <Button className="SaveBtn" variant="contained">Verify & Save</Button>
                    </Box>
                </Dialog>
    )
}


function Overview(props) {

    const dispatch = useDispatch();


    const {batchName, batchCode, startDate, students, faculty, _id} = props.data;
    const [batch, setBatch] = React.useState({
        name : batchName,
        code : batchCode,
        date : startDate,
        category:'',
        course:'',
        sub: [''],
        id : _id
    });



    const [Edit, setEdit] = useState(false);
    const [addStudent, setAddStudent] = useState(false);
    const [addfaculty, setAddFaculty] = useState(false);

    const toggleDialog = () => {
        if(Edit){
            setEdit(false);
        }else{
            setEdit(true);
        }
    }
    const editBatch = () => {
        dispatch(actions.editRequest(batch.id,batch));
    }
    const handleChange = (e) => {
        setBatch({
            ...batch,
            [e.target.name] : `${e.target.value}`
        });
        console.log(batch);
    }
    return (
        <Box className="Overview">
           <Grid
           direction="row"
           alignItems="flex-start"
           justifyContent="flex-start"
           container
           spacing={2}
           >
               <Grid item lg="6.5" xl="7">
                   <Paper elevation={2} className="Batch">
                       <Batch editClick={toggleDialog} data = {batch}/>
                   </Paper>
                   <Paper elevation={2} className="TimeTable">
                       <Timetable />
                   </Paper>
                   <Paper elevation={2} className="StudentTab">
                       <LazyBox list={students} heading="Students" />
                   </Paper>
                   <Paper elevation={2} className="FacultyTab">
                       <LazyBox list={faculty} heading="Faculty" />
                   </Paper>
               </Grid>
               <Grid
               marginLeft="4.5rem"
                item lg="4" xl="4">
                   <Paper elevation={2} className="LiveClass">
                       <LiveClass />
                   </Paper>
                   <Paper elevation={2} className="ZoomClass">
                       <ZoomClass />
                   </Paper>
                   <Paper elevation={2} className="ZoomClass">
                       <RecentAnnouncement />
                   </Paper>
               </Grid>
               
           </Grid>
           <Dialog open={Edit}>
               <Box className="Overview__dialog">
                   <Box className="Heading">
                        <Typography variant='subtitle1'>Add Batch Details</Typography>
                        <Close onClick={toggleDialog} />
                   </Box>
                   <Box className="Body">

                       <Box fullWidth className="Input2__container">
                       <FormControl className="Input1">
                       <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="category"
                                fullWidth
                                label="Category"
                                value={batch.category}
                                name="category"
                                onChange={handleChange}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'Cat 1'}>Once</MenuItem>
                                <MenuItem value={'Cat 2'}>Second</MenuItem>
                                <MenuItem value={'Cat 3'}>Three</MenuItem>
                            </Select>
                            </FormControl>
                            <FormControl className="Input1">
                            <InputLabel id="demo-simple-select-label">Course</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="course"
                                fullWidth
                                label="Course"
                                value={batch.course}
                                name="course"
                                onChange={handleChange}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                ̥<MenuItem value={'Class X'}>Class X</MenuItem>
                                ̥<MenuItem value={'Class XII'}>Class XII</MenuItem>
                                ̥<MenuItem value={'College/Univ'}>UnderGrad</MenuItem>
                            </Select>
                       </FormControl>
                       </Box>
                       <MultipleSelectChip subjects={props.subjectList} />
                   </Box>
                   <Box className="Footer">
                       <Button variant="contained" onClick={()=>{editBatch();toggleDialog()}}>
                           Save
                       </Button>
                   </Box>
               </Box>
           </Dialog>
        </Box>
    )
}

function mapStateToProps(state){
   return {
        categoryList: state.categoryReducer.categories,
        subjectList: state.subjectsReducer.subjects,
        courseList: state.courseReducer.courses,
   } 
}

export default connect(mapStateToProps)(Overview);
