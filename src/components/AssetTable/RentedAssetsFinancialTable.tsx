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
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import { RootStore } from "../../redux/store";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { AssetTypes } from "../../redux/types";
function RentedfilteredAssetFinancialTable({ search }: { search: string }) {
  const navigate = useNavigate();
  const setAssetDetails = (assetId: number) => {
    navigate(`/admin/assets/${assetId}`);
  };
  const { assets, loading } = useSelector((state: RootStore) => state.admin);
  const [filteredAsset, setFilteredAssets] = useState<AssetTypes[]>([]);
  useEffect(() => {
    //@ts-ignore
    setFilteredAssets(assets?.filter((asset) => asset?.isRented === 1));
  }, [assets]);
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
          Total Asset :
          <CountUp end={filteredAsset?.length} duration={2} />
        </Typography>
      </Box>
      <Box>
        {loading ? (
          <Loader />
        ) : (
          <TableContainer sx={{ marginY: 3 }} >
            {filteredAsset.length ? (
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        AssetID
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Asset Name
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Vendor
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Rent(pr month)
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Start Date of rent
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        End date of rent
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Deposit
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Details
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                {filteredAsset?.map((rentalAsset) => (
                  <TableRow key={rentalAsset?.assetId}>
                    <TableCell align="center">{rentalAsset?.assetId}</TableCell>
                    <TableCell align="center">{rentalAsset?.name}</TableCell>
                    <TableCell align="center">{rentalAsset?.vendor}</TableCell>
                    <TableCell align="center">{rentalAsset?.rent}</TableCell>
                    <TableCell align="center">
                      {rentalAsset?.rentStartDate?.slice(0, 10)}
                    </TableCell>
                    <TableCell align="center">
                      {rentalAsset?.rentEndDate?.slice(0, 10)}
                    </TableCell>
                    <TableCell align="center">{rentalAsset?.deposit}</TableCell>
                    <TableCell align="right">
                      <Tooltip
                        title="Asset Details"
                        children={
                          <IconButton
                            onClick={() =>
                              setAssetDetails(rentalAsset?.assetId)
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
      </Box>
    </>
  );
}
export default RentedfilteredAssetFinancialTable;