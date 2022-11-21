import {
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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootStore } from "../../redux/store";
import Loader from "../Loader/Loader";
import { Dispatch } from "react";

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
      {loading ? (
        <Loader />
      ) : (
        <TableContainer sx={{ marginY: 3 }} component={Paper}>
          {assets.length ? (
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
                    <Typography sx={{ fontWeight: "bold" }}>
                      Ram
                    </Typography>
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
                </TableRow>
              </TableHead>

              {assets?.map((filteredAsset) => (
                <TableRow key={filteredAsset?.assetId} sx={{background:!filteredAsset?.is_active?'lightgrey':""}}>
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

                  <TableCell align="center">{filteredAsset?.screen_type?.length?filteredAsset?.screen_type:'-'}</TableCell>
                  <TableCell align="center">{filteredAsset?.screen_size?filteredAsset?.screen_size:'-'}</TableCell>
                  <TableCell align="center">
                    {filteredAsset?.ram?filteredAsset?.ram:'-'}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.status?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.processor?.length?filteredAsset?.processor?.toUpperCase():'-'}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.operating_system?.length?filteredAsset?.operating_system.toUpperCase():'-'}
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


// import {
//   CircularProgress,
//   Grid,
//   IconButton,
//   Paper,
//   Table,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { Stack } from "@mui/system";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { RootStore } from "../../redux/store";
// import Loader from "../Loader/Loader";
// import { LOADING } from "../../redux/types";
// import { Dispatch, useEffect, useState } from "react";
// import { getSingleAssetDetails } from "../../redux/actions/AdminActions";
// import Asset from "../../pages/employee/Asset";

// const AssetsTable = () => {
//   const navigate = useNavigate();
//   const { assets, singleAssetDetails, loading } = useSelector(
//     (state: RootStore) => state.admin
//   );

//   const dispatch: Dispatch<any> = useDispatch();

//   const setAssetDetails = (assetId: number) => {
//     // dispatch(getSingleAssetDetails(assetId));
//     navigate(`/admin/assets/${assetId}`);
//   };

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <TableContainer sx={{ marginY: 3 }} component={Paper}>
//           {assets.length ? (
//             <Table aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>AssetID</Typography>
//                   </TableCell>
                  
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Asset Name
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                      Brand Name
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Category
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Screen Type
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Screen Size
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Ram
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Processor
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Operating System
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography sx={{ fontWeight: "bold" }}>
//                       Details
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               </TableHead>

//               {assets?.map((filteredAsset) => (
//                 <TableRow key={filteredAsset?.assetId}>
//                   <TableCell align="center">{filteredAsset?.assetId}</TableCell>
                  
//                   <TableCell align="center">
//                     {filteredAsset?.name?.toUpperCase()}
//                   </TableCell>
//                   <TableCell align="center">
//                     {filteredAsset?.brandName?.toUpperCase()}
//                   </TableCell>
//                   <TableCell align="center">
//                     {filteredAsset?.category?.toUpperCase()}
//                   </TableCell>

//                   <TableCell align="center">{filteredAsset?.screen_type}</TableCell>
//                   <TableCell align="center">{filteredAsset?.screen_size}</TableCell>
//                   <TableCell align="center">
//                     {filteredAsset?.ram}
//                   </TableCell>
//                   <TableCell align="center">
//                     {filteredAsset?.status?.toUpperCase()}
//                   </TableCell>
//                   <TableCell align="center">
//                     {filteredAsset?.processor?.toUpperCase()}
//                   </TableCell>
//                   <TableCell align="center">
//                     {filteredAsset?.operating_system?.toUpperCase()}
//                   </TableCell>
//                   <TableCell align="right">
//                     <Tooltip
//                       title="Asset Details"
//                       children={
//                         <IconButton
//                           onClick={() =>
//                             setAssetDetails(filteredAsset?.assetId)
//                           }
//                         >
//                           <OpenInNewIcon sx={{ color: "darkblue" }} />
//                         </IconButton>
//                       }
//                     />
//                   </TableCell>

//                 </TableRow>
//               ))}
//             </Table>
//           ) : (
//             <Typography textAlign={"center"}>No Assets found!</Typography>
//           )}
//         </TableContainer>
//       )}
//     </>
//   );
// };

// export default AssetsTable;
