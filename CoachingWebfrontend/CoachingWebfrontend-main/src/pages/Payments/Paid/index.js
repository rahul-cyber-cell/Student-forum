import React from "react";
import { ReactDOM } from "react";
import "./style.css";
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

function NestedList(props) {
  const [open, setOpen] = React.useState(false);
  const [dateOpen, setDateOpen] = React.useState(true);
  var value = "";
  if (props.data === "unpaid" || props.data === "paid") {
    value = "Last";
  } else {
    value = "Next";
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDateClick = () => {
      setDateOpen(!dateOpen);
  }

  return (
    <List
      sx={{ width: '185%', maxWidth: 580, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="BATCHES" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup style={{paddingLeft: "10px"}}>
            <FormControlLabel control={<Checkbox />} label="Maths" />
            <FormControlLabel control={<Checkbox />} label="Physics" />
            <FormControlLabel control={<Checkbox />} label="Chemistry" />
            <FormControlLabel control={<Checkbox />} label="Biology" />
        </FormGroup>
      </Collapse>
        <Divider />
      <ListItemButton onClick={handleDateClick}>
        <ListItemText primary="DATE" />
        {dateOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={dateOpen} timeout="auto" unmountOnExit>
      <FormControl style={{paddingLeft: "10px"}}>
            <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
            >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value={value + " 7 days"} control={<Radio />} label={value + " 7 days"} />
            <FormControlLabel value={value + " 14 days"} control={<Radio />} label={value + " 14 days"} />
            <FormControlLabel value="Custom date" control={<Radio />} label="Custom date" />
            </RadioGroup>
        </FormControl>
      </Collapse>
    </List>
  );
}


function Paid(props) {
    return (
        <div className="payment">
            <div className="paid">
                <div className="payment-amount">
                    <h2>Outstanding Payment - Rs. 0.00</h2>
                    <Link to="/newRecord" style={{textDecoration: "none"}}>
                      <Button style={{position: "absolute", right: "0"}} variant="contained">Add Payment Record</Button>
                    </Link>
                </div>

                <div className="search">
                  <p>TRANSACTIONS</p>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" placeholder="Search Transactions" variant="standard" />
                  </Box>
                </div>

                <div className="card">
                    <img src="https://web.classplusapp.com/newApp/static/media/payments.461473c1.svg" alt="payment" width={150} height={150} />
                    <h1>You don't have any payment records to display here</h1>
                </div> 
            </div>
            <div className="rightCard">
                <NestedList data={props.data} />
            </div>
        </div>
    )
}

export default Paid;