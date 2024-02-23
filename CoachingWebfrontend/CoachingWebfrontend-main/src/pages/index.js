import Batches from "./Batches";
import Enquiry from "./Enquiry";
import React from 'react'
import { Tab, Tabs } from '@mui/material';
import './style.css';
import TabPanel from '../components/TabPanel';
import { Box } from '@mui/system';
import Payments from './Payments';

function Home() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="Root">
      <Tabs
        onChange={handleChange}
        value={value}
      >
        <Tab label="Batches" />
        <Tab label="Timetable" />
        <Tab label="Enquiry" />
        <Tab label="Payments" />
        <Tab label="Chats" />
        <Tab label="App Downloads" />
        <Tab label="Study Material" />
      </Tabs>
      <TabPanel className="Root__TabPanel" value={value} index={0}>
        <Batches />
      </TabPanel>
      <TabPanel className="Root__TabPanel" value={value} index={1}></TabPanel>
      <TabPanel className="Root__TabPanel" value={value} index={2}>
        <Enquiry />
      </TabPanel>
      <TabPanel className="Root__TabPanel" value={value} index={3}>
        <Payments />
      </TabPanel>
      <TabPanel className="Root__TabPanel" value={value} index={4}></TabPanel>
      <TabPanel className="Root__TabPanel" value={value} index={5}></TabPanel>
      <TabPanel className="Root__TabPanel" value={value} index={6}></TabPanel>
    </Box>
  )
}

export default Home
