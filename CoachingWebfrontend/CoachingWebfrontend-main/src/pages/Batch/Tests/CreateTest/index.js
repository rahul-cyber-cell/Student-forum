import React from 'react';
import {Box} from '@mui/system';
import {Typography, TextField, Button, Avatar, Divider, Select, FormControl, InputLabel} from '@mui/material';
import './style.css';
import { Checkbox, MenuItem } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { ArrowBack } from '@material-ui/icons';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';

function Stage3(props){
    return (
        <Box className="CT_Stage3">
            {[...Array(props.Questions)].map((e,i)=>(
                <Box className="Answer Box">
                <t1>Q{i+1}.</t1>
                </Box>
            ))}
        </Box>
    )
}

function Stage2(props){
    const [Type, setType] = React.useState(0);
    const handleChange = (e) => {
        setType(e.target.value);
    }

    const [Marks, setMarks] = React.useState({
        correct: 4,
        incorrect:-1,
    });
    const [MaxMarks, setMaxMarks] = React.useState(0);
    const [Questions, setQuestions] = React.useState(0);
    const [Files, setFiles] = React.useState([]);
    const [TestName, setTestName] = React.useState('');
    const [duration, setDuration] = React.useState('');
    const [Datedata, setDatedata] = React.useState({
        startDate:'',
        endDate:'',
    })

    const handleNameChange = (e) => setTestName(e.target.value);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const filesArray = [].slice.call(files);
        filesArray.forEach(e => {
            setFiles(e);
        });
    }

    const RemoveFile = () => {
        setFiles(null);
    }

    const openFileDialog = () => {
        document.getElementById('addFile').click();
    } 

    const computeMaxMarks = () => {
        const max = Marks.correct * props.Questions;
        setMaxMarks(max);
        console.log(MaxMarks)
    }

    const handleMarksChange = (e) => {
        console.log(Marks);
        setMarks({
            ...Marks,
            [e.target.name] : parseInt(e.target.value),
        });
        computeMaxMarks();
    }

    const handleDate = (newValue) => {
        setDatedata({
            ...Datedata,
            startDate : newValue.toString()
        })
    }
    return (
        <Box className="CT_Stage2">
            <Box className="Stage2__Sec1">
            <FormControl fullWidth maxWidth={'sm'}>
                <InputLabel id="demo-simple-select-label">Test Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Type}
                    label="Test Type"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                </Select>
                </FormControl>
            </Box>
            <Divider />
            <Box className="Stage2__Sec2">
                <p></p>
                <input id="addFile" type="file" onChange={handleFileChange} hidden/>
                <Button onClick={openFileDialog} className="AddFile_btn"><AddCircleOutlineOutlinedIcon /> ADD FILE</Button>
                <Box className="Sec2__questions">
                    <TextField label="Number of Questions" onChange={props.handleQuesChange}/>
                    <TextField name="correct" label="Correct" onChange={handleMarksChange}/>
                    <TextField name="incorrect" label="Incorrect" onChange={handleMarksChange}/>
                    <TextField label="Max Marks" value={MaxMarks} disabled/>
                </Box>
            </Box>
            <Divider />
            <Box className="Stage2__Sec3">
                <TextField label="Test Name" type="text" sx={{width:"40%"}} onChange={handleNameChange} />
                <Box className="Sec3__Duration">
                    <p>Duration of Test</p>
                    <div className="buttons">
                        <Button className="Duration_btns" onClick={()=>setDuration('30min')} variant={(duration==='30min')?"contained":"outlined"}>30 min</Button>
                        <Button className="Duration_btns" onClick={()=>setDuration('1hour')} variant={(duration==='1hour')?"contained":"outlined"}>1 hour</Button>
                        <Button className="Duration_btns" onClick={()=>setDuration('2hour')} variant={(duration==='2hour')?"contained":"outlined"}>2 hour</Button>
                        <Button className="Duration_btns" onClick={()=>setDuration('3hour')} variant={(duration==='3hour')?"contained":"outlined"}>3 hour</Button>
                        <TextField onFocusCapture={()=>setDuration('')} onChange={(e)=>{setDuration(`${e.target.value}hour`)}} label="Custom" />
                    </div>

                </Box>
                <Box className="Sec3__Timing">
                <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                    onChange={handleDate}
                    name="startDate"
                    value={Datedata.startDate}
                    label="Test Start Date"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField name="startDate" variant="outlined" fullWidth style={{maxWidth:'45%', marginTop:"1rem", marginRight:"2.5%"}} {...params}/>}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                    onChange={handleDate}
                    name="endDate"
                    value={Datedata.endDate}
                    label="Test End Date(optional)"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField name="startDate" variant="outlined" fullWidth style={{maxWidth:'45%', marginTop:"1rem", marginRight:"2.5%"}} {...params}/>}
                    />
                </LocalizationProvider>
                </Box>
            </Box>
        </Box>
    )
}

function Stage1(props){


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

    const studentList = [
    {
        fullName: 'Student 1',
        number : '+91 1234567890',
        joinDate : '02-10-2021',
        id:'01',
    },{
        fullName: 'Student 2',
        number : '+91 1234567890',
        joinDate : '02-10-2021',
        id:'02',
    },{
        fullName: 'Student 3',
        number : '+91 1234567890',
        joinDate : '02-10-2021',
        id:'03',
    },{
        id:'04',
        fullName: 'Student 4',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'05',
        fullName: 'Student 5',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'06',
        fullName: 'Student 6',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'07',
        fullName: 'Student 7',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'08',
        fullName: 'Student 8',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'09',
        fullName: 'Student 9',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'10',
        fullName: 'Student 10',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'11',
        fullName: 'Student 11',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'12',
        fullName: 'Student 12',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'13',
        fullName: 'Student 13',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'14',
        fullName: 'Student 14',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'15',
        fullName: 'Student 15',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },{
        id:'16',
        fullName: 'Student 16',
        number : '+91 1234567890',
        joinDate : '02-10-2021'
    },
]

let selectedStudents = [];
const [buttonProps, setButtonProps] = React.useState('')

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

const handleSelect = (e) => {
    console.log(e.target.checked);
    const data = studentList.filter((student) => { return student.id === e.target.value})
    if(e.target.checked){
        selectedStudents.push(data[0]);
    }else{
       selectedStudents = removeItemOnce(selectedStudents,data[0]);
    }
    console.log(selectedStudents)
}


    return (
        <Box className="CT_Stage1">
            {studentList.map((student) => (
                        <Box className="StudentTile">
                            <Box className="StudentCred">
                            <Avatar {...stringAvatar(student.fullName)}/>
                            <p1>{student.fullName}
                            <p2>{student.number}</p2>
                            </p1>
                            </Box>

                            <p3>{student.joinDate}</p3>

                            <Checkbox value={student.id} onChange={handleSelect} />
                        </Box>
                    ))}
        </Box>
    )
}

function CreateTest(props) {
    const [Questions, setQuestions] = React.useState(0);
    const [Stage, setStage] = React.useState(1);

    const handleQuesChange = (e) => {
        console.log(Questions);
        setQuestions(parseInt(e.target.value));
    }


    return (
        <Box className="CreateTest">
            <Box className="Heading">
                <ArrowBack onClick={()=>setStage(Stage-1)}/>
                <Typography  variant="h5">Tests</Typography>
                <TextField variant="filled" label size="small" />
                <Button variant="contained" onClick={() => setStage(Stage+1)}>Next</Button>
            </Box>
            {
                (Stage===1)?(<Stage1 />):(Stage===2)?(<Stage2 handleQuesChange={handleQuesChange} Questions={Questions} />):(<Stage3 questions={Questions}/>)
            }
        </Box>
    )
}

export default CreateTest
