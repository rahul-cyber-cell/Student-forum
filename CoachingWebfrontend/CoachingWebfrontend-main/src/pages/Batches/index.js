import { Box } from '@mui/system';
import * as actions from '../../actions/batch'; 
// IMPORT COURSE ACTIONS
import {Paper, Divider, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormGroup, FormControl, TextField} from '@mui/material'
import React from 'react';
import './style.css';
import Batch from '../Batch';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Close, Sort } from '@material-ui/icons';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


function CreateBatch(props){
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = React.useState({
        batchName: '',
        startDate: '',
        batchCode: '',
    })

    const onSubmit = () => {
        const data = formData
        dispatch(actions.addRequest(data));
        history.push('/')
      };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
        // console.log(formData)
    }

    const handleDate = (newValue) => {
        setFormData({
            ...formData,
            startDate : newValue.toString()
        })
    }
    return (
        <Dialog
        fullWidth
        maxWidth={'md'}
        open={props.state}>
            <Box className="CreateBatch">
            <DialogTitle style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>Create New Batch <Close onClick={props.Close} className="CloseBtn"/></DialogTitle>
            <Divider />
            <DialogContent style={{height:"20rem"}}>
                <FormGroup style={{display:'flex', flexDirection:'row'}}>
                    <TextField name="batchName" onChange={handleChange} type="text" label="Batch Name" style={{width:'45%', marginRight:'1rem'}} />
                    <TextField name="batchCode" onChange={handleChange} type="text" label="Batch Code" style={{width:'45%', marginLeft:'1rem'}} />
                </FormGroup>
                <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                    onChange={handleDate}
                    name="startDate"
                    value={formData.startDate}
                    label="Batch Start Date"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField name="startDate" variant="outlined" fullWidth style={{maxWidth:'45%', marginTop:"1rem", marginRight:"2.5%"}} {...params}/>}
                    />
                </LocalizationProvider>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={onSubmit} style={{margin:"1rem"}} variant="contained">Create</Button>
            </DialogActions>
            </Box>
        </Dialog>
    )
}

function Batches(props) {
    const dispatch = useDispatch();
    // const batches = [];
    const batches  = props.batches;
    React.useEffect(() => {
        dispatch(actions.getAllRequest());
        // console.log(batches) 
    },[dispatch])

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
          children: `${name.split(' ')[0][0]}`,
        };
      }
    const [currBatch, setCurrBatch] = React.useState(null);
    const [createBatch, setCreateBatch] = React.useState(false)
    const [BatchPage, setBatchPage] = React.useState(true)
    const Batches = (
        <Box className="Batches">
        <Box className="Batches__Heading">
            <p>Batches ({batches.length})</p>
            <Box className="c2">
                <Button style={{margin:"0 0.5rem"}} variant="outlined" startIcon={<Sort />}>Sort</Button>
                <Button onClick={()=>setCreateBatch(true)} style={{margin:"0 0.5rem"}} variant="contained">+ Create Batch</Button>
            </Box>
        </Box>
        <Divider />
        <Box className="Batches__Body">
            {
                batches.map((batch)=>(
                    <Paper onClick={()=>{setBatchPage(false);setCurrBatch(batch)}} elevation={1} className="Batches__Batch">
                        <Box className="r1">
                            <h5>{batch.batchName}</h5>
                            <t1>No Courses</t1>
                            <t1>No Subjects</t1>
                        </Box>
                        <Box className="r2">
                            <Avatar {...stringAvatar(batch.batchName)} />
                        </Box>
                    </Paper>
                ))
            }
        </Box>
        <CreateBatch state={createBatch} Close={()=>setCreateBatch(false)} />
    </Box>
    )
    if(BatchPage){
        return Batches;
    }else{
        console.log(currBatch);
        return (<Batch data={currBatch} />)
    }
}

function mapStateToProps(state) {
    return {
        batches : state.batchReducer.batches,
    }
}


export default connect(mapStateToProps)(Batches);