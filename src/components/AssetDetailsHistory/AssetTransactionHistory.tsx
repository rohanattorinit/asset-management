import { Box, Grid, Paper } from '@mui/material'
import { red, yellow } from '@mui/material/colors'
import { bgcolor } from '@mui/system'
import TextField from '@mui/material/TextField';
import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

function AssetTransactionHistory() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: 128,
    //       height: 128,
    //       backgroundColor:"red"
    //     },
    //   }}
    // >
    <Grid  display="flex"    >
      <Box   sx={{width: "50%",
               height: "50%",}}>
    {/* <Paper sx={{  padding: 1 }} elevation={3}> */}
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Asset Recived on 2022-09-30	</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Asset Allocated to Archana Gangurde on 2022-09-06</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Asset Deallocated from Archana Gangurde on 2022-11-09</TimelineContent>
      </TimelineItem>
    </Timeline>
      {/* </Paper> */}
      </Box>
      </Grid>
  )
}

export default AssetTransactionHistory