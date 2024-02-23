import { AccessTime } from '@material-ui/icons';
import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import AssignmentPage from './AssignmentDetails';
// import CreateAssignment from './CreateAssignment';
import './style.css';

function AsssignmentTile(props){
    const {name, author, submissions, students, startDate, lastDate, notes, attachment} = props.data;
    return(
        <Paper onClick={props.onClickFunc} elevation={1} className="AssignmentTile">
            <Box className="Header">
                <t1>{name}</t1><t2>{submissions}/{students.length} Submitted</t2>
            </Box>
            <Box className="Author">Created by {author}</Box>
            <Box className="Date"><AccessTime />{startDate}</Box>
        </Paper>
    )
}

function Assignment() {
    const [Page, setPage] = React.useState(0);
    const [createAssignment, setCreateAssignment] = React.useState(false);
    const [currAssignment, setCurrAssignment] = React.useState('');
    const assignments = [
        {
            name:'test',
            author:'Harsh Misra',
            submissions:'1',
            students : [
                {
                    name:'user 1',
                    status: 'Pending',
                    time:'',
                    answers : '',
                    remarks : '',
                },
                {
                    name:'Student 2',
                    status: 'Approved',
                    time:'13-Nov-2021 9:39PM',
                    answers : 'FILE',
                    remarks : 'Blah Blah Blah Remarks',
                }
            ],
            startDate:'11-Nov-2021',
            lastDate:'14-Nov-2021',
            notes:'Notes will be here',
            attachment:'FILE',
        },
        {
            name:'Assignment 2',
            author:'Abhay Verma',
            submissions:'1',
            students : [
                {
                    name: 'student 1',
                    status: 'Pending',
                    time:'',
                    answers : '',
                    remarks : '',
                },
                {
                    name: 'testStudent 1',
                    status: 'Approved',
                    time:'13-Nov-2021 9:39PM',
                    answers : 'FILE',
                    remarks : 'Blah Blah Blah Remarks',
                }
            ],
            startDate:'15-Nov-2021',
            lastDate:'20-Nov-2021',
            notes:'Notes will be here',
            attachment:'FILE',
        }
    ]

    const empty = (
        <Box className="empty">
            <h1>!!!</h1>
            <p1>No assignments created yet!</p1>
        </Box>
    )
    const assignmentList = (
        <Box className="Assignment">
        <Box className="Heading">
        <Typography variant="h5">Assignments</Typography>
        <Button onClick={()=>setCreateAssignment(true)} variant="contained">Create Assignment</Button>
        </Box>
        <Box className="Body">
            {assignments.map((assignment,i)=>(
                <AsssignmentTile onClickFunc={()=>{setCurrAssignment(assignment)}} data={assignment}/>
            ))}
        </Box>
        <CreateAssignment closeFunc={()=>setCreateAssignment(false)} state={createAssignment}/>
    </Box>
    )

    const assignmentPage = (
        <>
        <AssignmentPage backFunc={()=>{setCurrAssignment('')}} data={currAssignment} />
        </>
    )

    if(currAssignment !== ''){
        return assignmentPage;
    }
    else
    return assignmentList;
}

export default Assignment
