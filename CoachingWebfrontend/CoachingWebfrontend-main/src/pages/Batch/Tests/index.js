import { Button, TextField, Typography, Paper } from '@material-ui/core';
// import { AccessTime } from '@material-ui/icons';
import { Box } from '@mui/system'
import React from 'react';
import './style.css';
// import CreateTest from './CreateTest';

function TestTile(props) {
    const {name, author, submissions, students, startDate} = props.data;
    return (
        <Paper className="TestTile">
            <Box className="Header">
                <t1>{name}</t1><t2>{submissions}/{students.length} Submitted</t2>
            </Box>
            <Box className="Author">Created by {author}</Box>
            <Box className="Date"><AccessTime />{startDate}</Box>
        </Paper>
    )
}

function Test(props) {
    const testTile = [
        {
            name: "Test 1",
            author : "Harsh Misra",
            submissions : 2,
            students : ['a','a','a','a','a','a'],
            startDate : "15-Nov-2021"
        },
        {
            name: "Test 2",
            author : "Abhay verma",
            submissions : 5,
            students : ['a','a','a','a','a','a'],
            startDate : "11-Nov-2021"
        },
    ]
    // return (
    //     <Box className="Test">
    //         <Box className="Heading">
    //             <Typography  variant="h5">Tests</Typography>
    //             <TextField variant="filled" label size="small" />
    //             <Button variant="contained" onClick>Create Test</Button>
    //         </Box>
    //         <Box className="Body">
    //              {testTile.map((data)=>(
    //                  <TestTile data={data} />
    //              ))}
    //         </Box>
    //     </Box>
    // )
    return (
        // <CreateTest />
    )
}

export default Test
