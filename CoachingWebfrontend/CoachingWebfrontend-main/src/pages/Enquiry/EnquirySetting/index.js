import {
  Avatar, Grid, Paper, Typography, Button,
  Dialog, DialogContent, DialogActions, TextField,
  IconButton, Divider
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export const EnquireSetting = (props) => {

  const [open, addMember] = React.useState(false);

  const [remove, removeMember] = React.useState(false);

  const AddMember = () => {
    return (
      <>
        <Dialog open={open} maxWidth="sm" fullWidth>
          <DialogContent sx={{ padding: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6">
                  Add CareTaker
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
                  Care Taker Name
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

  const RemoveMember = () => {
    return (
      <>
        <Dialog open={remove} maxWidth="xs" fullWidth>
          <DialogContent sx={{ padding: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ mr: 'auto' }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Remove Care Taker : test
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto' }}>
                <IconButton size="small" onClick={() => removeMember(false)}>
                  <ClearSharpIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">
                Proceed only if you are very sure.
              </Typography>
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: "#cdcdcd", display: 'flex', alignItems: 'center' }}>
              <Button
                color="info"
                variant="outlined"
                sx={{ ml: 'auto' }}
                size="small"
                onClick={() => removeMember(false)}
              >
                Cancel
              </Button>
              <Button
                color="info"
                variant="contained"
                sx={{ ml: 2 }}
                size="small"
              >
                Ok
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={8}>
          <Box sx={{ my: 6 }}>
            <Box sx={{ my: 2 }}>
              <IconButton onClick={() => props.back()}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Paper>
              <Box sx={{ p: 4 }}>
                <Grid container justifyContent={"center"} rowGap={2}>
                  <Grid item xs={10}>
                    <Typography sx={{ fontWeight: 30 }} variant="body2">
                      CARE TAKER SETTINGS
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography sx={{ py: 2, fontWeight: 40 }} color="gray" variant="body2">
                      OWNER
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, fontSize: 14, height: 50, width: 50, backgroundColor: '#d73d32' }}>
                        VG
                      </Avatar>
                      <Typography sx={{ py: 2, fontWeight: 40 }} variant="body2">
                        Vaibhav Goel
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography sx={{ py: 2, fontWeight: 40 }} color="gray" variant="body2">
                      +919560766005
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography sx={{ py: 2, fontWeight: 40 }} color="gray" variant="body2">
                      CARETAKER
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="outlined" color="inherit" size="small" onClick={() => addMember(true)}>
                      <AddIcon style={{ marginRight: 2 }} /> Add
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, fontSize: 14, height: 50, width: 50, backgroundColor: '#ffd54f' }}>
                        T
                      </Avatar>
                      <Typography sx={{ py: 2, fontWeight: 40 }} variant="body2">
                        test
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography sx={{ py: 2, fontWeight: 40 }} color="gray" variant="body2">
                      +918655802494
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="text" color="error" size="small" onClick={() => removeMember(true)}>
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {open && AddMember()}
      {remove && RemoveMember()}
    </>
  )
} 