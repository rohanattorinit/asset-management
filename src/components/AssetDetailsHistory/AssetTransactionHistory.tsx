import { Box, Grid, Paper } from "@mui/material";
import { red, yellow } from "@mui/material/colors";
import { bgcolor } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { Dispatch, useEffect } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent, timelineOppositeContentClasses } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { getAssetTransactionLog } from "../../redux/actions/AdminActions";
import { useLocation } from "react-router-dom";
import { RootStore } from "../../redux/store";
import { AssetAllocateDeallocateLog, AssetTicketLog, AssetUpdatedLog, EmpTicketType } from "../../redux/types";

function AssetTransactionHistory() {
  const location = useLocation();

  const id = location.pathname.split("/")[3];
  const dispatch: Dispatch<any> = useDispatch();

  const { assetTrasactionLogs } = useSelector((state: RootStore) => state.admin);

  let allocationLogs: AssetAllocateDeallocateLog[] = [];
  let transactionDetails: AssetAllocateDeallocateLog[] = [];
  let ticketDetails: AssetTicketLog[] = [];
  let assetUpdate: AssetUpdatedLog[] = [];
  assetTrasactionLogs.allocation_logs.forEach((element) => {
    allocationLogs.push(element);
  });
  allocationLogs.forEach((element) => {
    return transactionDetails.push(element);
  });
  assetTrasactionLogs.ticket_logs.forEach((element) => {
    return ticketDetails.push(element);
  });
  assetTrasactionLogs.asset_updation_logs.forEach((element) => assetUpdate.push(element));
  console.log(ticketDetails);

  useEffect(() => {
    dispatch(getAssetTransactionLog(id));
  }, [dispatch, id]);

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
    <Grid>
      <Box>
        {/* <Paper sx={{  padding: 1 }} elevation={3}> */}
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">{assetTrasactionLogs.received_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Asset Recived in Organisation </TimelineContent>
          </TimelineItem>
          {assetTrasactionLogs.allocation_logs.length > 0 &&
            transactionDetails.map((emp) => (
              <>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">{emp.allocated_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Asset was allocated to {emp.emp_name}</TimelineContent>
                </TimelineItem>
                {ticketDetails.length > 0 &&
                  ticketDetails.map(
                    (ticket) =>
                      emp.emp_id === ticket.empId && (
                        <TimelineItem>
                          <TimelineOppositeContent color="textSecondary">{ticket.created_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot color="error" />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>{`T:${ticket.ticketId} - Ticket raised by ${ticket.empId} `} </TimelineContent>
                        </TimelineItem>
                      ),
                  )}
                {assetUpdate.length > 0 &&
                  ticketDetails.map((ticket) => emp.emp_id === ticket.empId) &&
                  assetUpdate.map((asset) => (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">{asset.updated_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>{asset.description.search("from") > -1 ? `${asset.updated_feature.toUpperCase()} Updated ${asset.description}` : `${asset.description} ${asset.updated_feature}`} </TimelineContent>
                    </TimelineItem>
                  ))}
                {ticketDetails.length > 0 &&
                  ticketDetails.map(
                    (ticket) =>
                      emp.emp_id === ticket.empId && (
                        <TimelineItem>
                          <TimelineOppositeContent color="textSecondary">{ticket.closed_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot color="error" />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>{`Ticket T:${ticket.ticketId} closed`} </TimelineContent>
                        </TimelineItem>
                      ),
                  )}
                {emp.deallocated_at != null && (
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">{emp.deallocated_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Asset was Deallocated from {emp.emp_name}</TimelineContent>
                  </TimelineItem>
                )}
              </>
            ))}
          {assetTrasactionLogs.deleted_at != null && (
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">{assetTrasactionLogs.deleted_at.replace("T", "~").slice(0, 19)}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Asset was Deleted</TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
        {/* </Paper> */}
      </Box>
    </Grid>
  );
}

export default AssetTransactionHistory;
