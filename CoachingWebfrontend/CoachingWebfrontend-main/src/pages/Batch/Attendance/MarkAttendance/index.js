import { Accordion,AccordionSummary, AccordionDetails,Switch, Button, Box, Dialog, Modal, Typography, Divider, Grid, Avatar, DialogTitle, DialogActions, DialogContent, TextField } from '@mui/material';
import {Close} from '@mui/icons-material';
import React from 'react';
import './style.css';
import {AccessTime,PeopleAlt,ImportContacts,Person,ExpandMore} from '@mui/icons-material';


function DateBox(props){
    const {dateData} = props;
    const {date,month,day} = dateData;

    return( 
        <Box className="DateComp">
            <Box className="Month">{month}</Box>
            <Box className="Date">{date}</Box>
            <Box className="Day">{day}</Box>
        </Box>
    )
}

function StudentListComp(props){
    return (
        <Box className="StudentListElement">
            <Avatar {...props.stringAvatar(props.name)}/>
            <t1>{props.name}</t1>
            <t1>{props.phone}</t1>
            <Box className="toggleBtn">
                <Switch defaultChecked/>
            </Box>
            <t1>Feedback : {(props.feed)?props.feed:'NA'}</t1>
        </Box>
    )
}

function MarkAttendance(props) {
    const [remarkDialog, setRemarkDialog] = React.useState(false)
    const {data,studentData, ...other} = props;
    const {
        toggleDialog,
            } = props;
    const {batch, time, subject, faculty, totalStudents, totalPresent, dateData} = data;
    return (
        <Dialog open={props.state}
        fullWidth
        maxWidth={'md'}>
            <Box className="MarkAttendance">
            <Box className="Heading">
                <Typography variant="subtitle1">Mark Class Attendance</Typography><Close onClick={toggleDialog} />
            </Box>
            <Divider />
            <Box className="Body1">
                <Grid
                container
                width="100%"
                >
                    <Grid item width="50%">
                        <Box className="dataTab">
                            <PeopleAlt className="icon" />
                            <div>
                            <t1>Batch</t1>
                            <t2>{batch}</t2>
                            </div>
                        </Box>
                        <Box className="dataTab">
                            <ImportContacts className="icon"/>
                            <div>
                            <t1>Subject</t1>
                            <t2>{subject}</t2>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item width="50%">
                        <Box className="dataTab">
                            <AccessTime className="icon"/>
                            <div>
                            <t1>Time</t1>
                            <t2>{time}</t2>
                            </div>
                        </Box>
                        <Box className="dataTab">
                            <Person className="icon"/>
                            <div>
                            <t1>Faculty</t1>
                            <t2>{faculty}</t2>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box className="Body2">
                <Box className="dataTab">
                <PeopleAlt className="icon"/>
                    <div>
                    <t1>Total Students</t1>
                    <t3>{totalStudents}</t3>
                    </div>
                </Box>
                <Box className="dataTab">
                <PeopleAlt className="icon"/>
                    <div>
                    <t1>Total Present</t1>
                    <t3>{totalPresent}</t3>
                    </div>
                </Box>
            </Box>
            <Divider />
            <Box className="Body3">
                <DateBox dateData={props.data.dateData} />
                <Box className="Topic-Sect">
                    <Button>Add Topic</Button>
                    <p><t1>Avg. Feedback: </t1><t2>Not updated</t2></p>
                </Box>
                <Box className="Search-Sect">
                </Box>
            </Box>
            <Divider />
            <Box className="Body4">
                    {studentData.map((student) => (
                        <Accordion className="AccordianList">
                        <AccordionSummary expandIcon={<ExpandMore />}><StudentListComp name={student.name} phone={student.phone} stringAvatar={props.avatar_func} /></AccordionSummary>
                        <AccordionDetails>
                            <t5>Remarks : </t5><t6>{student.remarks}</t6><br />
                            <Button onClick={()=>setRemarkDialog(true)}>+Add Remarks</Button>
                            <Dialog open={remarkDialog}
                            fullWidth
                            maxWidth={'sm'}>
                                <DialogTitle>Add/Edit Remark</DialogTitle>
                                <DialogContent>
                                    <TextField sx={{margin:"1rem auto"}} label="Remarks" type="text" variant="outlined" fullWidth/>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained">Save</Button>
                                    <Button variant="contained" onClick={()=>setRemarkDialog(false)}>Cancel</Button>
                                </DialogActions>
                            </Dialog>
                        </AccordionDetails>
                        </Accordion>
                    ))}
            </Box>
            <Divider />
            </Box>
        </Dialog>
    )
}

export default MarkAttendance
