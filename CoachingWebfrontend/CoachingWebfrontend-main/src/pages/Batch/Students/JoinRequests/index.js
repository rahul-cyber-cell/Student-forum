import { Check, Close } from '@mui/icons-material';
import { Avatar, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import './style.css'

function JoinRequest(props) {
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
    const {requests} = props;
    return (
        <Dialog 
        fullWidth
        maxWidth={'sm'}
        open={props.state}>
            <Box className="ReqDialog">
            <DialogTitle className="Heading">Join Request <Close onClick={()=>props.toggleClose()} /></DialogTitle>
            <DialogContent className="Body">{requests.map((request)=>(
                <Box className="RequestTile">
                    <Avatar {...stringAvatar(request.fullName)} />
                    <t1>{request.fullName}</t1>
                    <t2>{request.number}</t2>
                    <Box className="Buttons">
                        <Check className="Icons"/>
                        <Close className="Icons"/>
                    </Box>
                </Box>
            ))}</DialogContent>
        </Box>
        </Dialog>
    )
}

export default JoinRequest
