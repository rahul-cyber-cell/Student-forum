import { Avatar, Divider, Grid, Paper, Button, Icon, Switch, Typography, Dialog, DialogContent, IconButton, TextField, DialogActions } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import ReorderIcon from '@mui/icons-material/Reorder';
import LockIcon from '@mui/icons-material/Lock';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

const SettingHeading = styled('p')(({ theme }) => ({
  fontSize: 20,
  fontWeight: 40,
  padding: 0,
  margin: 0,
}));


const SettingText = styled('p')(({ theme }) => ({
  fontSize: 15,
  letterSpacing: 1,
  fontWeight: 30,
  padding: 0,
  margin: 0,
}));

const NoFaculties = styled('p')(({ theme }) => ({
  fontSize: 17,
  letterSpacing: 1,
  fontWeight: 50,
  padding: 0,
  color: "#8e9e9e",
  textAlign: "center",
  margin: 0
}));



function SettingComp() {

  const permissions = [
    {
      name: "Attendance",
      active: true
    },
    {
      name: "Announcement",
      active: true
    },
    {
      name: "Test",
      active: false
    },
    {
      name: "Batch Editing",
      active: true
    },
    {
      name: "Student Management",
      active: false
    },
    {
      name: "Video Management",
      active: false
    },
    {
      name: "Assignment Management",
      active: false
    },
    {
      name: "Study Material Management",
      active: false
    },
  ];

  const edit = [
    {
      name: "ATTENDANCE",
      active: true
    },
    {
      name: "STUDENTS",
      active: true
    },
    {
      name: "ASSIGNMENTS",
      active: true
    },
    {
      name: "TESTS",
      active: true
    },
    {
      name: "ANNOUNCEMENTS",
      active: true
    },
    {
      name: "VIDEOS",
      active: true
    },
    {
      name: "LIVE CLASSES",
      active: true
    },
    {
      name: "STUDY MATERIAL",
      active: true
    },
  ];

  const [open, addMember] = React.useState(false);

  const AddMember = () => {
    return (
      <>
        <Dialog open={open} maxWidth="sm" fullWidth>
          <DialogContent sx={{ padding: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6">
                  Add Faculty
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => addMember(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ display: 'flex', alignItems: "center", width: '100%', }}>
              <Box sx={{ mr: "auto", p: 3, width: 'fit-content' }}>
                <Typography color="gray" variant="caption" sx={{ marginBottom: 1 }}>
                  Faculty Name
                </Typography>
                <TextField
                  size="small"
                />
              </Box>
              <Box sx={{ ml: 'auto', p: 3, width: 'fit-content' }}>
                <Typography color="gray" variant="caption" sx={{ marginBottom: 1 }}>
                  Mobile Number
                </Typography>
                <TextField
                  size="small"
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" sx={{ margin: 2 }}>
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }

  const [archive, setArchive] = React.useState(false);

  const Archive = () => {
    return (
      <>
        <Dialog open={archive} maxWidth="sm" fullWidth>
          <DialogContent sx={{ padding: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Archive?
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setArchive(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">
                You are about to archive this batch. It will get removed from batch list for all users.
              </Typography>
            </Box>
            <Box sx={{ pb: 2, px: 2 }}>
              <Typography variant="body2">
                Are you sure you want to proceed?
              </Typography>
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: "#cdcdcd", display: 'flex', alignItems: 'center' }}>
              <Button
                color="info"
                variant="outlined"
                sx={{ ml: 'auto' }}
                size="small"
                onClick={() => setArchive(false)}
              >
                Cancel
              </Button>
              <Button
                color="info"
                size="small"
                variant="contained"
                sx={{ ml: 2 }}
              >
                Confirm
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  const [deletedate, setDelete] = React.useState(false);

  const Delete = () => {
    return (
      <>
        <Dialog open={deletedate} maxWidth="sm" fullWidth>
          <DialogContent sx={{ padding: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Confirm Deletion
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => setDelete(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">
                Are you sure you want to delete?
              </Typography>
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: "#cdcdcd", display: 'flex', alignItems: 'center' }}>
              <Button
                color="info"
                variant="outlined"
                sx={{ ml: 'auto' }}
                size="small"
                onClick={() => setDelete(false)}
              >
                Cancel
              </Button>
              <Button
                color="info"
                variant="contained"
                sx={{ ml: 2 }}
                size="small"
              >
                Delete
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={10} lg={8}>
          <Box sx={{ mb: 3 }}>
            <Paper>
              <Box sx={{ mx: 3, py: 2 }}>
                <SettingHeading>
                  Settings
                </SettingHeading>
              </Box>
              <Box sx={{ mx: 3, pb: 2 }}>
                <SettingText>
                  OWNER
                </SettingText>
                <Box sx={{ my: 1 }}>
                  <Divider light />
                </Box>
              </Box>
              <Box sx={{ mx: 3, pb: 2, display: 'flex', alignItems: "center" }}>
                <Box>
                  <Avatar sx={{ backgroundColor: "#d73d32", fontSize: 16 }}>
                    VG
                  </Avatar>
                </Box>
                <Box sx={{ mx: 2 }}>
                  <SettingText>
                    Vaibhav Goel
                  </SettingText>
                </Box>
                <Box sx={{ mx: 4 }}>
                  <SettingText>
                    +919560766005
                  </SettingText>
                </Box>
              </Box>
              <Box sx={{ mx: 3, pb: 2, display: 'flex', alignItems: "center" }}>
                <Box sx={{ width: "fit-content", mr: 'auto' }}>
                  <SettingText>
                    FACULTY
                  </SettingText>
                </Box>
                <Box sx={{ width: "fit-content", ml: "auto" }}>
                  <Button variant="outlined" color="inherit" size="small" onClick={() => addMember(true)}>
                    <AddIcon style={{ marginRight: 2 }} /> Add
                  </Button>
                </Box>
              </Box>
              <Box sx={{ pb: 3, mx: 3 }}>
                <Divider light />
              </Box>
              <Box sx={{ mx: 3, pb: 3 }}>
                <NoFaculties>
                  No faculties added for the batch
                </NoFaculties>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Paper>
              <Box sx={{ mx: 3, py: 3 }}>
                <SettingHeading>
                  Faculty permissions
                </SettingHeading>
              </Box>
              <Box sx={{ mx: 3, pb: 2 }}>
                {permissions.map((data, index) => (
                  <Box sx={{ display: "flex", alignItem: "center" }} key={index}>
                    <Box sx={{ width: "fit-content", pb: 3, mr: "auto" }}>
                      {data.name}
                    </Box>
                    <Box sx={{ width: "fit-content", ml: "auto", display: "flex", alignItems: "center" }}>
                      <Typography color="gray" sx={{ fontWeight: 600, fontSize: 14 }}>
                        OFF
                      </Typography>
                      <Switch
                        color="success"
                        checked={data.active}
                      />
                      <Typography color={data.active ? 'green' : 'gray'} sx={{ fontWeight: 600, fontSize: 14 }}>
                        ON
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Paper>
              <Box sx={{ mx: 3, py: 3 }}>
                <SettingHeading>
                  Edit Tabs
                </SettingHeading>
              </Box>
              <Box sx={{ mx: 3, pb: 2 }}>
                <SettingText>
                  The tab order is the order in which your students will see info on your batch.
                  Hover and drag the tab to reorder it. Don’t like to see a tab, just toggle it off.
                </SettingText>
              </Box>
              <Box sx={{ mx: 3, pb: 2 }}>
                <Divider light />
              </Box>
              <Box sx={{ mx: 3, pb: 2, display: 'flex', alignItems: "center" }}>
                <Box sx={{ mr: "auto", ml: 5 }}>
                  OVERVIEW
                </Box>
                <Box sx={{ ml: "auto", mr: 5 }}>
                  <LockIcon size="small" color="disabled" />
                </Box>
              </Box>
              <Box sx={{ mx: 3, pb: 4 }}>
                {edit.map((data, index) => (
                  <Box sx={{ display: "flex", alignItem: "center" }} key={index}>
                    <Box sx={{ width: "fit-content", pb: 2, mr: "auto", alignItems: "center", display: "flex", color: "#8e8e8e" }}>
                      <ReorderIcon style={{ marginRight: 10 }} /> {data.name}
                    </Box>
                    <Box sx={{ width: "fit-content", ml: "auto", display: "flex", alignItems: "center" }}>
                      <Typography color="gray" sx={{ fontWeight: 600, fontSize: 14 }}>
                        OFF
                      </Typography>
                      <Switch
                        color="success"
                        checked={data.active}
                      />
                      <Typography color={data.active ? 'green' : 'gray'} sx={{ fontWeight: 600, fontSize: 14 }}>
                        ON
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Paper>
              <Button
                color="error"
                size="large"
                fullWidth
                sx={{ textDecoration: 'none' }}
                onClick={() => setArchive(true)}
              >
                <ArchiveOutlinedIcon style={{ marginRight: 20 }} />
                Archive this batch
              </Button>
            </Paper>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Paper>
              <Button
                fullWidth
                color="error"
                size="large"
                onClick={() => setDelete(true)}
                sx={{ textDecoration: 'none' }}
              >
                <DeleteForeverSharpIcon style={{ marginRight: 20 }} />
                Delete this batch
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {open && AddMember()}
      {archive && Archive()}
      {deletedate && Delete()}
    </>
  )
}

export default SettingComp;