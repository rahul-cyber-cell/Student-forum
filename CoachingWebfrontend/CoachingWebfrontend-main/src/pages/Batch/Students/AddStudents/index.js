import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import {  AddCircleOutline, ArrowBack, Close, CloudUpload, InsertDriveFile, SystemUpdate } from '@material-ui/icons'
import { Box } from '@mui/system';
import './style.css';
import { Grid, TextField, Typography, InputAdornment, Divider, Avatar, Checkbox } from '@mui/material'

function AppDownloads(props){
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


    const {studentList} = props;
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

    return(
        <Dialog open={props.state}
        fullWidth
        maxWidth={'md'}>
            <Box className="Dialog2">
                <DialogTitle className="Heading">
                    <ArrowBack onClick={props.backFunc} className="BackBtn" />App Downloads<Close onClick={props.toggleDialog} className="CloseBtn" />
                </DialogTitle>
                <DialogContent className="Body">
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
                </DialogContent>
                <DialogActions>
                    <Button className="SaveBtn" variant="contained" {...buttonProps}>Save</Button>
                </DialogActions>
            </Box>
        </Dialog>
    )
    }

function AddStudent(props) {
    const [Mode, setMode] = React.useState(0)
    const [File, setFile] = React.useState('')
    const [FileData, setFileData] = React.useState({
        name : '',
        size : 0
    })
    const BackMode = () => {
        setFile('');
        setMode(0);
    }

    const handleFileChange = (e) => {
        const files = e.target.files;
        const filesArray = [].slice.call(files);
        filesArray.forEach(e => {
            if(e.type != 'application/vnd.ms-excel'){
                alert("Invalid File Type, Please Provide A Valid CSV file")
            }else{
                setFileData({
                    name: e.name,
                    size : `${(e.size/1024).toFixed(2)}KB`
                });
            setFile(e);
            
                       }
        });
    }

    const RemoveFile = () => {
        setFile('');
        setFileData({
            name:'',
            size:''
        })
    }

    const openFileDialog = () => {
        document.getElementById('fileUpload').click();
    }

    switch(Mode){
        case 0:
            return(
                <Dialog open={props.state}>
                    <Box className="Dialog0">
                    <Close className="CloseBtn" onClick={props.toggleDialog} />
                    <Box className="ModeBtn" onClick={()=>setMode(1)}>
                        <AddCircleOutline className="icon"/>
                        <p>Add Student Manually</p>
                    </Box>
                    <Box className="ModeBtn" onClick={()=>setMode(2)}>
                        <SystemUpdate className="icon"/>
                        <p>Add Students from App Downloads</p>
                    </Box>
                    <Box className="ModeBtn" onClick={()=>setMode(3)}>
                        <CloudUpload className="icon"/>
                        <p>Upload csv file to add Students</p>
                        <t1>Download sample csv file</t1>
                    </Box>
                    <Box className="Foot">
                        <p>You can add upto 10,000 students in a batch!</p>
                    </Box>
                    </Box>
                </Dialog>
            )
        case 1:
            return (
                <Dialog open={props.state}
                fullWidth
                maxWidth={'lg'}>
                    <Box className="Dialog1">
                    <Close className="CloseBtn" onClick={() => {
                    props.toggleDialog();BackMode();}}/>
                    <ArrowBack className="BackBtn" onClick={BackMode}/>
                    <Box className="Heading">
                        <Typography variant="h5">Add Student</Typography>
                    </Box>
                    <Divider />
                    <Box className="Body">
                        <Grid className="FormGrid" container fullWidth direction="row">
                            <Grid className="FormCol" item>
                                <TextField required fullWidth label="Student Name" variant="outlined"/><br />
                                <TextField fullWidth label="Parent Name" variant="outlined"/>
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
        case 2:
            return (
                <>
                <AppDownloads state={props.state} backFunc = {() => setMode(0)} toggleDialog={() => props.toggleDialog()} studentList={[
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
                ]}/>
                </>
            )
        case 3:
            return (
                <Dialog
                fullWidth
                maxWidth={'md'}
                open>
                    <Box className="Dialog3">
                    <Close className="CloseBtn" onClick={() => {
                    props.toggleDialog();BackMode();}}/>
                    <ArrowBack className="BackBtn" onClick={BackMode}/>
                    <Box className="Heading">
                        <Typography variant="h5">Upload File</Typography>
                    </Box>
                    <Divider />
                        <Box className="Body">
                            {(File)?(<Box className="FileBox">
                                <InsertDriveFile className="icon"/>
                                <p2>
                                    {FileData.name} <Close className="icon2" onClick={RemoveFile} />
                                </p2>
                                <t2>
                                    {FileData.size}
                                </t2>
                            </Box>):(
                                <Box className="Empty">
                                    <Box className="Empty-Body">
                                    <CloudUpload className="icon"/>
                        <p1>Upload csv file to add Students</p1>
                        <t1>Download sample csv file</t1>
                                    </Box>
                                    <p>Now you can upload multiple Students seamlessly! Download the sample csv file
to see an example of the format required <br />
*Selected file should not contain more than 2000 Students</p>
                                </Box>
                            )}
                        </Box>
                        <Divider />
                        <Box className="Foot">
                            <input id="fileUpload" type="file" onChange={handleFileChange} hidden/>
                            <Button onClick={openFileDialog} variant="contained">Add File</Button>
                        </Box>
                    </Box>
                </Dialog>
            )

    }
}

export default AddStudent
