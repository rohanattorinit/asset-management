import { Box, Grid } from "@mui/material";
import { Dispatch, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { getAssetTransactionLog } from "../../redux/actions/AdminActions";
import { useLocation } from "react-router-dom";
import { RootStore } from "../../redux/store";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Loader from "../Loader/Loader";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function AssetTransactionHistory() {
  const location = useLocation();

  const id = location.pathname.split("/")[3];
  const dispatch: Dispatch<any> = useDispatch();

  const { assetTrasactionLogs, loading } = useSelector(
    (state: RootStore) => state.admin
  );

  useEffect(() => {
    dispatch(getAssetTransactionLog(id));
  }, [dispatch, id]);

  return (
    <Grid item xs={12} md={10} p={3}>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.5,
              },
            }}
          >
            {assetTrasactionLogs?.map((transaction, id) => {
              return (
                <>
                  {transaction?.event_name === "Asset Received" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <AddToQueueIcon sx={{ color: "#0369a1" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>
                        {`Asset ${transaction?.asset_id} Recived in Organisation`}{" "}
                      </TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Asset Allocation" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <AssignmentIndIcon sx={{ color: "#16a34a" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{`Asset allocated to ${transaction?.emp_name}(${transaction.emp_id}) `}</TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Ticket raised" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <BuildIcon sx={{ color: "#1e40af" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{`Ticket ${transaction?.ticket_id} raised by ${transaction?.emp_name}(${transaction.emp_id})`}</TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Asset Update" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <SecurityUpdateGoodIcon sx={{ color: "#1e40af" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{` ${transaction?.update_feature.toUpperCase()} Changed  (${
                        transaction.update_description
                      }) `}</TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Ticket solved" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <ThumbUpAltIcon sx={{ color: "#0369a1" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{`Ticket ${transaction?.ticket_id} resolved by Admin`}</TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Asset Deallocation" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <RemoveCircleIcon sx={{ color: "#dc2626" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{`Asset deallocated from  ${transaction?.emp_name}(${transaction.emp_id})`}</TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Asset status changed" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <AutorenewIcon sx={{ color: "#fbbf24" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{`Asset status changed from ${transaction?.asset_status}`}</TimelineContent>
                    </TimelineItem>
                  )}

                  {transaction?.event_name === "Asset Deleted" && (
                    <TimelineItem>
                      <TimelineOppositeContent color="textSecondary">
                        {transaction?.date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <DeleteIcon sx={{ color: "#dc2626" }} />
                        <TimelineConnector
                          sx={{
                            display:
                              id === assetTrasactionLogs?.length - 1
                                ? "none"
                                : "",
                          }}
                        />
                      </TimelineSeparator>
                      <TimelineContent>{`Asset deleted from orgnization`}</TimelineContent>
                    </TimelineItem>
                  )}
                </>
              );
            })}
          </Timeline>
        </Box>
      )}
    </Grid>
  );
}

export default AssetTransactionHistory;
