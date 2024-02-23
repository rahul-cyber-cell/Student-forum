import { Search } from '@material-ui/icons'
import { Button, Tab, Tabs, TextField, Typography, Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import TabPanel from '../../../components/TabPanel';
import AddStudent from './AddStudents';
import JoinRequest from './JoinRequests';
import './style.css';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../../../actions/student'

function StudentTile(props){
    const {fullName, number} = props.data;
    function stringToColor(string) {
        let hash = 0;
        let i;
      console.log(string.length);
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    return(
        <Box className="StudentTile">
           <Avatar {...stringAvatar(fullName)}/>
            <Box className="StudentTile__name">{fullName}</Box>
            <Box className="StudentTile__mobile">{number}</Box>
        </Box>
    )
}

function ActiveStudents(){
    return (
        <>
        </>
    )
}

function Students(props) {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    const active=0;
    const inactive =0;
    const StudentData = props.batchStudents;

    const handleTabChange = (event,newValue) => {
        setValue(newValue);
    }

    React.useEffect(() => {
        dispatch(actions.getRequest(props.id))
    }, )

    const [Dialog, setDialog] = React.useState(false)
    const [reqDialog, setReqDialog] = useState(false)

    const toggleDialog = () => {
        if(Dialog){
            setDialog(false)
        }else{
            setDialog(true)
        }
    }
    const toggleReqDialog = () => {
        if(reqDialog){
            setReqDialog(false)
        }else{
            setReqDialog(true)
        }
    }

    const label=(
        <Box sx={{display:'flex',alignItems:'center'}}>
        <Search  /> Search
        </Box>
    )

    return (
        <Box className="Students">
            <Box className="Heading">
                <Typography  variant="h5">Students</Typography>
                <TextField variant="filled" label={label} size="small" />
                <Button variant="contained" onClick={toggleDialog}>Add Student</Button>
            </Box>
            <Box className="Body">
                <Tabs
                className="TabMenu"
                justifyContent="flex-start"
                alignItems="flex-start"
                value={value}
                onChange={handleTabChange}
                >
                    <Tab label={`Active (${active})`} />
                    <Tab label={`Inactive (${inactive})`} />
                    <Button onClick={()=>setReqDialog(true)} className="btn">See Join Request</Button>
                </Tabs>
                <TabPanel value={value} index={0}>
                    {StudentData.map((student) => (
                        <StudentTile data={student} />
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Inactive                    
                </TabPanel>
            </Box>
            <JoinRequest state={reqDialog} toggleClose={toggleReqDialog} requests={StudentData} />
            <AddStudent state={Dialog} toggleDialog={toggleDialog} />
        </Box>
    )
}

// function mapStateToProps(state) {
//     return {
//         batchStudents : state.studentReducer.studentList,
//     }
// }

export default Students;
// connect(mapStateToProps)(Students)
