import { FormControlLabel, FormGroup, Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './style.css';

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


    const students = props.data;
    return (
        <Box className="Stage1">
            <DialogTitle className="Header">
                Create Assignment - (Step 1 of 2)
            </DialogTitle>
            <Divider />
            <DialogContent className="Body">
                {students.map((student)=>(
                    <Box className="Stage1__student">
                        <div className="Cred">
                            <Avatar {...stringAvatar(student.name)} />
                            <p>{student.name}</p>
                        </div>
                        <Checkbox />
                    </Box>
                ))}
            </DialogContent>
            <DialogActions className="Actions">
            <Button onClick={props.cancel} variant="contained">Cancel</Button>
            <Button onClick={props.nextFunc} variant="contained">Next >></Button>
            </DialogActions>
        </Box>
    )
}

function Stage2(props){

    const openFileAdd = () => {
        document.getElementById('assignment-attachment').click();
    }

    return (
        <Box className="Stage2">
            <DialogTitle className="Header">
                Create Assignment - (Step 2 of 2)
            </DialogTitle>
            <Divider />
            <DialogContent>
                <TextField label="Topic" variant="outlined" placeholder="Enter Assignment Topic Here" fullWidth/>
                <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField variant="outlined" fullWidth style={{maxWidth:'45%', marginTop:"1rem", marginRight:"2.5%"}} {...params} />}
                    />
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField variant="outlined" fullWidth style={{maxWidth:'45%', marginTop:"1rem", marginLeft:'2.5%'}} {...params} />}
                    />
                </LocalizationProvider><br />
                <FormGroup style={{margin:'1rem', fontSize:'0.9rem'}}>
                    <FormControlLabel control={<Checkbox />} label="Late Submissions Allowed" />
                </FormGroup><br/>
                <TextField label="Notes" fullWidth multiline rows={4} variant="outlined" /><br />
                <input type="file" id="assignment-attachment" hidden/>
                <Button fullWidth className="AddAttachmentBtn" onClick={openFileAdd} variant="outlined">Add Attachment(s)</Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.prevFunc} variant="contained" style={{position:'absolute', left:'0', margin:'0.5rem'}}>Back</Button>
                <Button onClick={props.cancel} variant="contained">Cancel</Button>
                <Button variant="contained">Save</Button>
            </DialogActions>
        </Box>
    )
}

function CreateAssignment(props) {
    const students = [
        {
            name:'Student 1',
        },
        {
            name:'Student 2',
        },
        {
            name:'Student 3',
        },
        {
            name:'Student 4',
        },
        {
            name:'Student 5',
        },
        {
            name:'Student 6',
        },
    ]
    const [Stage, setStage] = React.useState(1);
    return (
        <Dialog
        fullWidth
        maxWidth={'md'}
        open={props.state}>{(Stage===1)
            ?<Stage1 cancel={()=>{props.closeFunc(); setStage(1)}} nextFunc={()=>setStage(2)} data={students} />
            :<Stage2 cancel={props.closeFunc} prevFunc={()=>setStage(1)}/>
        }
        </Dialog>
    )
}

export default CreateAssignment
