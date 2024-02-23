import React from 'react'
import { connect } from 'react-redux';
import {Box} from '@mui/system';
import * as actions from '../../actions/auth'
import userReducer from '../../reducers/userReducer'
import './style.css';
import { Button, InputAdornment, OutlinedInput, Paper, TextField } from '@mui/material';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

function TextValidated(props){
    const [helperText, setHelperText] = React.useState('');
    const [error, setError] = React.useState(false);
    const [C, setC] = React.useState(0)
    React.useEffect(() => {
        if(C>0){

            if(isNaN(props.value) || isNaN(parseFloat(props.value)))
            {
                setError(true);
                setHelperText('Please Enter Number');
            }
            else if((props.value).length !== 10){
                setError(true);
                setHelperText('Enter Only 10-digit Number');
            }
            else{
                setError(false);
                setHelperText('');
            }
        }
        setC(1);
        console.log(props.value,C);
    }, [props.value])

    return(
        <TextField helperText={helperText} error={error} {...props} />
    )
}

function OTPValidated(props){
    const [helperTextOTP, setHelperTextOTP] = React.useState('');
    const [errorOTP, setErrorOTP] = React.useState(false);
    const [O, setO] = React.useState(0)
    React.useEffect(() => {
        if(O>0){

            if(isNaN(props.value) || isNaN(parseFloat(props.value)))
            {
                setErrorOTP(true);
                setHelperTextOTP('Please Enter Number');
            }
            else if((props.value).length !== 4){
                setErrorOTP(true);
                setHelperTextOTP('Enter Only 4-digit Number');
            }
            else{
                setErrorOTP(false);
                setHelperTextOTP('');
            }
        }
        setO(O);
        console.log(props.value,O);
    }, [props.value])

    return(
        <TextField helperText={helperTextOTP} error={errorOTP} {...props} />
    )
}

function LoginContainer(props) {

    const Stage1 = (
        <Box className="Step1">
        <Typography variant="h5">Login</Typography>
        <TextValidated value={props.mobile} onChange={props.handleChange} style={{margin:'1rem auto'}} name="mobileNumber" label="Enter Mobile Number" />
        {/* <TextField onChange={props.handleChange} style={{margin:'1rem auto'}} name="mobileNumber" label="Enter Mobile Number" /> */}
        <Button onClick={props.onSendOTP} variant="contained">GET OTP</Button>
        <Link className="registerBtn" to="/register">Don't Have an Account, REGISTER</Link>
    </Box>
    );

    const Stage2 = (
        <Box className="Step2">
        <ArrowBack style={{ position:"absolute", top:"30%", left:"40%"}} onClick={props.backFunc} />
        <Typography variant="h5">Login</Typography>
        <TextField style={{margin:"0.5rem"}} variant="outlined" value={props.mobile} disabled/>
        <TextField style={{margin:"0.5rem"}} variant="outlined" onChange={props.handleInsCode} value={props.institutionCode} label="Institute Code" type="text" />
        <OTPValidated style={{margin:"0.5rem"}} label="Enter OTP" value={props.otp} onChange={props.handleOTP} variant="outlined" />
        <Button onClick={props.onVerifyOTP} style={{margin:"1rem"}} variant="contained">Verify OTP</Button>
    </Box>
    )

    if(props.step===1)
    return Stage1
    else
    return Stage2
}

export const Login = (props) =>{ 

    const dispatch = useDispatch();
    const history = useHistory();

    const LoginState = useSelector((state)=>state.loginReducer);

    const [mobileNumber, setMobileNumber] = React.useState('7417000487');
    const [insCode, setinsCode] = React.useState('');
    const [Stage, setStage] = React.useState(1);
    const [OTP, setOTP] = React.useState('');

    const handleChange = (e) => {
        setMobileNumber(e.target.value);
    }
    const handleOTP = (e) => {
        setOTP(e.target.value);
    }
    const handleInsCode = (e) => {
        setinsCode(e.target.value);
    }

    const onSendOTP = () => {
        const data = "91"+mobileNumber;
        dispatch(actions.requestOTP(data));
        setStage(2);
    }

    const onVerifyOTP = () => {
        const data = `91${mobileNumber}`
        const otp = OTP
        const institutionCode = insCode
        dispatch(actions.requestLogin(data, otp, institutionCode));
        history.push('/');
    }


    const step2 = (
        <Box className="Step2">
            <ArrowBack onClick={()=>setStage(1)} className="BackBtn"/>
            <TextField style={{margin:'1rem auto'}} name="mobileNumber" value={mobileNumber} disabled label="Enter Mobile Number" />
            <TextField style={{marginBottom:'1rem auto'}} name="OTP" value={OTP} label="Enter OTP" maxLength={4} type="text" />
            <Button style={{marginBottom:'1rem auto'}} variant="contained">Verify OTP</Button>
        </Box>
    )
 
    const step1 = (
        <Box className="Step1">
            <TextField style={{margin:'1rem auto'}} name="mobileNumber" label="Enter Mobile Number" />
            <Button onClick={onSendOTP} variant="contained">GET OTP</Button>
        </Box>
    )
    return (
        <Box className="LoginPage">
            <Paper className="LoginContainer">
               <LoginContainer institutionCode={insCode} handleInsCode={handleInsCode} backFunc={()=>setStage(1)} onVerifyOTP= {onVerifyOTP} otp={OTP} step={Stage} mobile={mobileNumber} onSendOTP={onSendOTP} handleChange={handleChange} handleOTP={handleOTP} />
            </Paper>
        </Box>
    )
}

export default Login;
