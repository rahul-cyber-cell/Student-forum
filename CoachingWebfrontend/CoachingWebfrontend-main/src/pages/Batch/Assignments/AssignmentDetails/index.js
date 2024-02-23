import { Avatar, Button, Chip, Divider, IconButton, Menu, Paper, TextField, Typography, MenuItem } from '@material-ui/core';
import { ArrowBack, Delete, Edit, MoreVertOutlined, Search } from '@material-ui/icons';
import { FilterAlt } from '@mui/icons-material';
import { Box } from '@mui/system'
import React from 'react';
import './style.css';



function Student(props){

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
    

    const {name, status, time, answer, remarks} = props.data;
    return (
        <Box className="Assignment__StudentTile">
            <Box className="prof">
            <Avatar {...stringAvatar(name)} />
            <Box className="Cred">
                <p>{name}</p>
                <p1>Answers : {(answer)?'1':'0'}</p1>
            </Box>
            </Box>
            <Chip label={status} />

        </Box>
    )
}

function LongMenu() {
    const options = [
        'Edit Assignment',
        'Delete Assignment'
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
              width: '25ch',
            },
          }}
        >
            <MenuItem onClick={handleClose}>
               <Edit/> Edit Assignment
            </MenuItem>
            <MenuItem onClick={handleClose}>
               <Delete/> Delete Assignment
            </MenuItem>
        </Menu>
      </div>
    );
  }

function AssignmentPage(props) {
    const {name, author, submissions, students, startDate, lastDate, notes, attachment} = props.data;
    return (
        <Box className="AssignmentPage">
            <Box className="Heading">
                <ArrowBack className="BackBtn" onClick={props.backFunc} />
                <Typography variant="h5">Assignment Details</Typography>
                <Button variant="contained" disabled>Approve Assignments</Button>
                
            </Box>
            <Paper className="Details" elevation={1} >
                <Box className="Header">
                    <div className="t1">{name}</div>
                    <Box className="gp1">
                    <div className="t2">{submissions}/{students.length} Submitted</div>
                    <LongMenu />
                    </Box>
                </Box>
                <Divider />
                <Box className="Body">
                    <div className="t1">Details</div>
                    <div className="t2">Created By {author}</div>
                    <div className="t2">Deadline: {lastDate}</div>
                    <div className="t1">Notes</div>
                    <div className="t2">vxvxxx</div>
                    <div className="t1">Attachments (1)</div>
                </Box>
            </Paper>
            <Paper className="StudentList" elevation={1}>
            <Box className="Header">
                    <div className="t3">Students({students.length})</div>
                    <TextField size="small" variant="filled" type="text" label={<div className="search-txt"><Search />Search</div>} />
                    <Button variant="outlined"><FilterAlt /> Filter</Button>
            </Box>
            <Divider />
            <Box className="Body">
                {students.map((student)=>(
                    <Student data={student} />
                ))}
            </Box>
            </Paper>
        </Box>
    )
}

export default AssignmentPage
