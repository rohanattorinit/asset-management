import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Stack } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootStore } from "../../redux/store";
import Loader from "../Loader/Loader";
import { LOADING } from "../../redux/types";
import { Dispatch, useEffect, useState } from "react";
import { getSingleAssetDetails } from "../../redux/actions/AdminActions";
import Asset from "../../pages/employee/Asset";
import CountUp from "react-countup";

const AssetsTable = () => {
  const navigate = useNavigate();
  const { assets, singleAssetDetails, loading } = useSelector(
    (state: RootStore) => state.admin
  );

  const dispatch: Dispatch<any> = useDispatch();

  const setAssetDetails = (assetId: number) => {
    // dispatch(getSingleAssetDetails(assetId));
    navigate(`/admin/assets/${assetId}`);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            p: 1,
            borderRadius: 1,
          }}
        >
          Total Assets :
          <CountUp end={assets?.length} duration={2} />
        </Typography>
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer sx={{ marginY: 3 }} component={Paper}>
          {assets?.length ? (
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>AssetID</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Model No.
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Asset Name
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Category
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Asset Location
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Usability
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              {assets?.map((filteredAsset) => (
                <TableRow key={filteredAsset?.assetId}>
                  <TableCell align="center">{filteredAsset?.assetId}</TableCell>
                  <TableCell align="center">{filteredAsset?.modelNo}</TableCell>
                  <TableCell align="center">
                    {filteredAsset?.name?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.category?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.asset_location?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.status?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.usability?.toUpperCase()}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip
                      title="Asset Details"
                      children={
                        <IconButton
                          onClick={() =>
                            setAssetDetails(filteredAsset?.assetId)
                          }
                        >
                          <OpenInNewIcon sx={{ color: "darkblue" }} />
                        </IconButton>
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          ) : (
            <Typography textAlign={"center"}>No Assets found!</Typography>
          )}
        </TableContainer>
      )}
    </>
  );
};

export default AssetsTable;
