import {
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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

const AssetsTable = () => {
  const navigate = useNavigate();
  const { assets, singleAssetDetails, loading } = useSelector(
    (state: RootStore) => state.admin
  );

  const dispatch: Dispatch<any> = useDispatch();

  const setAssetDetails = (assetId: number) => {
    console.log("erreereer");
    // dispatch(getSingleAssetDetails(assetId));
    navigate(`/admin/assets/${assetId}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>AssetID</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>Model No.</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Asset Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>Category</Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>Usability</Typography>
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
                <IconButton
                  onClick={() => setAssetDetails(filteredAsset?.assetId)}
                >
                  <OpenInNewIcon sx={{ color: "darkblue" }} />
                </IconButton>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default AssetsTable;
