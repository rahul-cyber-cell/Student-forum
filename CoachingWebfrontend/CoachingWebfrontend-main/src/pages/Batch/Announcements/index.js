import {
  Grid, Button, Typography, InputBase, Paper, Avatar, Divider,
  IconButton, Menu, MenuItem, Dialog, DialogContent, TextField, Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '30ch',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    fontSize: 14,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '20ch',
  },
}));

const Announcements = () => {

  const Announcement = [
    {
      name: "Vaibhav Goel",
      date: "a month ago -Shared attachment",
      message: "Web Development using PHP",
      icon: <FolderIcon fontSize="large" color="primary" />,
      file_name: "data.png"
    },
    {
      name: "Rani",
      date: "2 months ago -Made an announcement",
      message: "React.js Application development in web",
      icon: "",
      file_name: ""
    },
    {
      name: "Vaibhav Goel",
      date: "2 months ago -Made an announcement",
      message: "Python Programming Language",
      icon: "",
      file_name: ""
    },
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const nameCheck = (name) => {
    const data = name.split(' ');
    if (data[0] && data[1]) {
      return data.shift().charAt(0) + data.pop().charAt(0);
    } else {
      return data.shift().charAt(0);
    }
  }

  const [create, setCreate] = React.useState(false);

  const CreateAnnouncement = () => {
    return (
      <>
        <Dialog open={create} maxWidth="sm" fullWidth>
          <DialogContent sx={{ p: 0, m: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6">
                  Add Folder
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setCreate(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ backgroundColor: "rgb(215 61 50)", p: 1 }}>
                VG
              </Avatar>
              <Box sx={{ mx: 2 }}>
                <Typography variant="subtitle1">
                  Vaibhav Goel
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: 2, mb: 2 }}>
              <TextField
                rows={4}
                multiline
                fullWidth
                variant="outlined"
                size="small"
                color="info"
                placeholder="Make an announcement"
              />
            </Box>
            <Box sx={{ p: 2 }}>
              <label htmlFor="contained-button-file">
                <input style={{ display: 'none' }} accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="outlined" color="inherit" size="small" component="span">
                  <AttachFileIcon sx={{ mr: 2 }} fontSize="small" /> Attach
                </Button>
              </label>
            </Box>
            <Box sx={{ mx: 2, py: 2, borderTop: 1, borderColor: "#cdcdcd", display: 'flex', alignItems: 'center' }}>
              <Checkbox color="primary" sx={{ ml: 'auto' }} /> {" "} Send SMS <Button sx={{ ml: 2 }} size="small" color="info" variant="contained">Post</Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8} lg={7}>
          <Box sx={{ display: 'flex', aligntItems: 'center', mt: 4, mb: 3 }}>
            <Box sx={{ mr: 'auto' }}>
              <Typography variant="h5" sx={{ fontWeight: 300 }}>
                Announcement
              </Typography>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Button
                variant="contained"
                color="info"
                onClick={() => setCreate(true)}
              >
                Create Announcement
              </Button>
            </Box>
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize="small" color="disabled" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Announcements..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box>
            {Announcement.map((data, index) => (
              <Box key={index} sx={{ my: 3 }}>
                <Paper sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <Avatar sx={{ backgroundColor: 'orangered', fontSize: 14 }}>
                        {nameCheck(data.name)}
                      </Avatar>
                    </Box>
                    <Box sx={{ mx: 2 }} >
                      <Typography display="block" sx={{ p: 0, m: 0 }} variant="subtitle1">
                        {data.name}
                      </Typography>
                      <Typography variant="caption" sx={{ p: 0, m: 0 }} color="gray">
                        {data.date}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, ml: 'auto' }}>
                      <IconButton
                        aria-label="more"
                        id={'long-button' + index}
                        aria-controls={"long-menu" + index}
                        aria-expanded={openMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id={"long-menu" + index}
                        MenuListProps={{
                          'aria-labelledby': 'long-button' + index,
                        }}
                        elevation={1}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                      >
                        <MenuItem onClick={handleCloseMenu}>
                          <EditIcon sx={{ mr: 2 }} /> Edit Link
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                          <DeleteIcon sx={{ mr: 2 }} /> Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Box>
                  <Box sx={{ mx: 7 }}>
                    <Typography variant="subtitle1">
                      {data.message}
                    </Typography>
                  </Box>
                  <Box sx={{ my: 1, mx: 7 }}>
                    {data.icon}
                    <Typography display="block">
                      {data.file_name}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      {create && CreateAnnouncement()}
    </>
  )
}

export default Announcements;