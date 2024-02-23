import React from "react";
import { ReactDOM } from "react";
import "./style.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from "@material-ui/core";

import Paid from "./Paid/index";
import StudentList from "./StudentList";
import PaymentSettings from "./PaymentSettings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#eeeeee', display: 'flex', height: "424px", marginTop: "50px" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', padding: "0 0 0 20px", bgcolor: "#eeeeee" }}
      >
        <Tab style={{height: "15px", backgroundColor: "#eeeeee"}} label="Unpaid" {...a11yProps(0)} />
        <Tab style={{height: "15px", backgroundColor: "#eeeeee"}} label="Upcoming" {...a11yProps(1)} />
        <Tab style={{height: "15px", backgroundColor: "#eeeeee"}} label="Paid" {...a11yProps(2)} />
        <Tab style={{height: "15px", backgroundColor: "#eeeeee"}} label="Student List" {...a11yProps(3)} />
        <Tab style={{height: "15px", backgroundColor: "#eeeeee"}} label="Payment Settings" {...a11yProps(4)} />
        <Divider />
        <Tab style={{height: "15px", backgroundColor: "#eeeeee"}} label="Vaibhav Goel" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Paid data="unpaid" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paid data="upcoming" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paid data="paid" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StudentList />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PaymentSettings />
      </TabPanel>
    </Box>
  );
}


function Payments() {
    return (
        <div>
            <VerticalTabs />
        </div>
    );
}

export default Payments;

