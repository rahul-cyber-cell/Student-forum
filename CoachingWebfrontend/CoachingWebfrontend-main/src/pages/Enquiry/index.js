import { Grid } from '@mui/material';
import React from 'react';
import { Filter, EnquiryList, EnquireSetting, EnquiryHistory } from "./router/router";


const Enquiry = () => {

  const [setting, setSetting] = React.useState(false);
  const [enquiry, setEnquiry] = React.useState(false);
  const [history, setHistory] = React.useState(true);


  return (
    <>
      {enquiry && <Grid container>
        <Grid item xs={2}>
          <Filter
            settings={() => {
              setSetting(true);
              setEnquiry(false);
              setHistory(false);
            }}
          />
        </Grid>
        <Grid item xs={10}>
          <EnquiryList
            history={() => {
              setSetting(false);
              setEnquiry(false);
              setHistory(true);
            }}
          />
        </Grid>
      </Grid>}
      {setting && <EnquireSetting
        back={() => {
          setSetting(false);
          setEnquiry(true);
          setHistory(false);
        }}
      />}
      {history && <EnquiryHistory
        back={() => {
          setSetting(false);
          setEnquiry(true);
          setHistory(false);
        }}
      />}
    </>
  )
}

export default Enquiry;