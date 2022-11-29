import {
  Box,
  IconButton,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootStore } from "../../redux/store";
import Loader from "../Loader/Loader";
import { AssetTypes } from "../../redux/types";
import CountUp from "react-countup";

const AssetsTable = ({ assets }: { assets: AssetTypes[] }) => {
  const navigate = useNavigate();
  const { loading } = useSelector((state: RootStore) => state.admin);

  const setAssetDetails = (assetId: number) => {
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
          Active Assets :
          <CountUp
            end={assets?.filter((asset) => asset.is_active).length}
            duration={2}
          />
        </Typography>
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer sx={{ marginY: 3 }}>
          {assets?.length ? (
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>AssetID</Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Asset Name
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Brand Name
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Category
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Screen Type
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Screen Size
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Ram</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Processor
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Operating System
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Details</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              {assets?.map((filteredAsset) => (
                <TableRow
                  key={filteredAsset?.assetId}
                  sx={{
                    background: !filteredAsset?.is_active ? "lightgrey" : "",
                  }}
                >
                  <TableCell align="center">{filteredAsset?.assetId}</TableCell>

                  <TableCell align="center">
                    {filteredAsset?.name?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.brandName?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.category?.toUpperCase()}
                  </TableCell>

                  <TableCell align="center">
                    {filteredAsset?.screen_type?.length
                      ? filteredAsset?.screen_type
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.screen_size
                      ? filteredAsset?.screen_size
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.ram ? filteredAsset?.ram : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.status?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.processor?.length
                      ? filteredAsset?.processor?.toUpperCase()
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.operating_system?.length
                      ? filteredAsset?.operating_system.toUpperCase()
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title={
                        !filteredAsset?.is_active
                          ? "Deleted Asset"
                          : "Asset Details"
                      }
                      children={
                        <IconButton
                          onClick={() =>
                            setAssetDetails(filteredAsset?.assetId)
                          }
                        >
                          <OpenInNewIcon
                            sx={{
                              color: !filteredAsset?.is_active
                                ? "red"
                                : "darkblue",
                            }}
                          />
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
