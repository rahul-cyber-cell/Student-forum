import './style.css';
import { FilterAlt, Schedule } from '@mui/icons-material'
import { Button, Typography, Avatar, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import MarkAttendance from './MarkAttendance';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function AttendanceTile(props){

    const [Dialog, setDialog] = React.useState(false);

    const toggleDialog = () => {
        if(Dialog){
            setDialog(false);
        }else{
            setDialog(true);
        }
    }

    function stringToColor(string) {
        let hash = 0;
        let i;
      
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


    const {data,...other} = props;

    const StudentData = [
        {
            name: 'Student 1',
            phone:'917563764423',
            remarks:'',
        },
        {
            name: 'Student 2',
            phone:'917563764423',
            remarks:'',
        },
        {
            name: 'Student 3',
            phone:'917563764423',
            remarks:'',
        },
        {
            name: 'Student 4',
            phone:'917563764423',
            remarks:'',
        },
        {
            name: 'Student 5',
            phone:'917563764423',
            remarks:'',
        },
    ]
    return (
        <Paper elevation={1} className="AttendanceTile">
            <Box className="Heading">
                <Typography variant="h6">{data.subject}</Typography>
            </Box>
            <Box className="Body1">
                <Avatar {...stringAvatar(data.name)} /><p1>{data.name}</p1>
            </Box>
            <Box className="Body2">
                <Box className="timing">
                    <Schedule /> {data.timing}
                </Box>
                <Button onClick={toggleDialog}>Mark Attendance ></Button>
            </Box>
            <MarkAttendance data={{
                batch :'test1234',
                subject : data.subject,
                faculty : data.name,
                time : data.timing,
                totalStudents : '2',
                totalPresent : '2',
                dateData : {
                    month : 'Nov',
                    date : '9',
                    day : 'Tue',
                },

            }} avatar_func={stringAvatar} studentData = {StudentData} state={Dialog} toggleDialog={toggleDialog} />
        </Paper>
    )
}

function Attendance(props) {
    const dataset = [{
            subject : 'BASIC',
            name : 'Harsh Misra',
            timing : '09:00 AM - 11:00 AM'
    },
    {
        subject : 'BASIC',
        name : 'Abhay Verma',
        timing : '12:00 PM - 03:00 PM'
    }];
    const emp=1;
    const empty = (
        <Box className="empty">
            <p1>All Empty Here!</p1>
            <p2>Looks like you don't have any classes today</p2>
            <Button variant="contained" className="btn">Mark Attendance</Button>
        </Box>
    )

    return (
        <Box className="Attendance">
            <Typography variant="h5">Mark Attendance</Typography>
            <Box className="SubHeading">
                <p>CLASSES (0)</p>
                <p>October 03, 2021</p>
                <Button variant="outlined">
                    <FilterAlt /> Filter
                </Button>
            </Box>
            <Box className="Body">
                <Box className="Tiles">
                {(emp!=0)?dataset.map((data) => 
                <AttendanceTile data={data} />
            ):empty}</Box>
            <Box className="Calendar">
                <Calendar />
            </Box>
            </Box>
        </Box>
    )
}

export default Attendance
