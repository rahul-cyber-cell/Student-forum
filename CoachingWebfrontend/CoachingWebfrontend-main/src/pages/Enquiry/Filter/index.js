import { Box } from "@mui/system";
import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Avatar, MenuItem, Paper, TextField, Typography, RadioGroup,
  FormControlLabel, Radio, Button, Accordion, AccordionDetails,
  AccordionSummary, Checkbox
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  settings: {
    cursor: 'pointer'
  }
}));

export const Filter = (props) => {

  const FilterBy = [
    {
      name: 'Followup Type',
      body: ['Call', 'Demo Class', 'Counselling Session']
    },
    {
      name: 'Enquiry Status',
      body: ['Low Interest', 'Medium Interest', 'Hight Interest', 'Converted', 'Lost']
    },
    {
      name: 'Date',
      body: ['Today', 'Last 7 days', 'Last 14 days', 'Last 1 month', 'Custom Date',]
    },
    {
      name: 'Activity Status',
      body: ['Upcoming', 'Completed', 'Missed']
    },
    {
      name: 'Sources',
      body: ['Justdail', 'Sulekha', 'Hoardings', 'Online Marketing', 'Reference', 'Others']
    },
    {
      name: 'Assignee',
      body: ['Self(Vaibhav Goel)', 'Bn', '@#$$%%', 'jksrbjs']
    },
    {
      name: 'Class & Subject',
      body: ['10', '10 and math', '10 and maths', '10 math', '10th']
    },
  ];

  const classes = useStyles();

  return (
    <>
      <Box sx={{ p: 2, borderRight: 1, borderColor: "#cdcdcd" }}>
        <Box className={classes.settings} sx={{ display: 'flex', alignItems: 'center', my: 2 }} onClick={() => props.settings()}>
          <Box sx={{ mr: 1 }}>
            <SettingsIcon color="disabled" fontSize="small" />
          </Box>
          <Typography variant="subtitle1" color="gray">
            Caretaker Settings
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            select
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
            size="small"
            valur={"Vaibhav Goel"}
            defaultValue={"Vaibhav Goel"}
            fullWidth
          >
            <MenuItem value={"Vaibhav Goel"}>
              <Box sx={{ display: "flex", alignItems: 'center' }}>
                <Avatar sx={{ fontSize: 12, backgroundColor: "#d73d32", mr: 2, height: 25, width: 25 }}>
                  VG
                </Avatar>
                <Typography variant="body2" color="darkgray">
                  Vaibhav Goel
                </Typography>
              </Box>
            </MenuItem>
          </TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ mb: 1 }}>
            <Typography variant="subtitle1" color="gray">
              Sort by
            </Typography>
          </Box>
          <Box>
            <Paper>
              <Box sx={{ p: 1 }}>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="Recently Added"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Recently Added" control={<Radio color="default" size="small" />} label="Recently Added" />
                  <FormControlLabel value="Last Modified" control={<Radio color="default" size="small" />} label="Last Modified" />
                  <FormControlLabel value="Follow Up Date & Time" control={<Radio color="default" size="small" />} label="Follow Up Date & Time" />
                </RadioGroup>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" color="gray">
              Filter by
            </Typography>
            <Button
              size="small"
              color="info"
              sx={{ ml: 'auto', textTransform: 'none' }}
            >
              Clear all
            </Button>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          {FilterBy.map((filter, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={"panel1bh-header" + index}
              >
                <Typography variant="caption" color="gray">
                  {filter.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filter.body.map((data, index2) => (
                  <Box sx={{ display: 'flex', alignItems: 'center' }} key={index2}>
                    <Checkbox
                      size="small"
                      color="info"
                    />
                    <Typography>
                      {data}
                    </Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  )
}