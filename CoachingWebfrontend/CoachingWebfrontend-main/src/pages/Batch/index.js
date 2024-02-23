import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Overview from './Overview';
import './style.css';
import { CalendarToday, FormatListBulleted, MenuBook, MenuBookOutlined, PeopleOutlined } from '@material-ui/icons';
import { Campaign, DriveFileRenameOutlineOutlined, MilitaryTech, Settings } from '@mui/icons-material';
import Attendance from './Attendance';
import Students from './Students';
import Assignment from './Assignments';
import Test from './Tests';
import Setting from "./Settings";
import StudyMaterial from "./StudyMaterial";
import Videos from './Videos';
import Announcements from './Announcements';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
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

export default function Batch(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="VerticalTabPanel">
      <Tabs
        orientation="vertical"
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab iconPosition="start" icon={<FormatListBulleted />} label="Overview" {...a11yProps(0)} />
        <Tab iconPosition="start" icon={<CalendarToday />} label="Attendance" {...a11yProps(1)} />
        <Tab iconPosition="start" icon={<PeopleOutlined />} label="Students" {...a11yProps(2)} />
        <Tab iconPosition="start" icon={<DriveFileRenameOutlineOutlined />} label="Assignments" {...a11yProps(3)} />
        <Tab iconPosition="start" icon={<Campaign />} label="Announcements" {...a11yProps(4)} />
        <Tab iconPosition="start" icon={<MilitaryTech />} label="Tests" {...a11yProps(5)} />
        <Tab iconPosition="start" icon={<MenuBookOutlined />} label="Live Classes" {...a11yProps(6)} />
        <Tab iconPosition="start" icon={<OndemandVideoIcon />} label="Videos" {...a11yProps(7)} />
        <Tab iconPosition="start" icon={<MenuBookOutlinedIcon />} label="Study Material" {...a11yProps(8)} />
        <Tab iconPosition="start" icon={<Settings />} label="Settings" {...a11yProps(9)} />
      </Tabs>
      <TabPanel className="TabPanel" value={value} index={0}>
        <Overview data={props.data} />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={1}>
        <Attendance data={props.data} />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={2}>
        <Students id={props.data._id} />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={3}>
        <Assignment />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={4}>
        <Announcements />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={5}>
        <Test />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={7}>
        <Videos />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={8}>
        <StudyMaterial />
      </TabPanel>
      <TabPanel className="TabPanel" value={value} index={9}>
        <Setting />
      </TabPanel>
    </Box>
  );
}
