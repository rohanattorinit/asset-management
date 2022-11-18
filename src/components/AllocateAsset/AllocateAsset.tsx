import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allocateAssets, getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import { useDebouncedCallback } from "use-debounce";
import Confirm from "../ConfirmAlert/Confirm";
import Alert from "../ConfirmAlert/Alert";
const AllocateAsset = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [search, setSearch] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [openAlert, setOpenAlert] = useState(false);

  const [assetIdCheck, setAssetId] = useState<number[]>([]);
  const dispatch: Dispatch<any> = useDispatch();
  const { employeeDetails, assets, loading, message } = useSelector(
    (state: RootStore) => state.admin
  );
  // Debounce callback
  const debounced = useDebouncedCallback(
    (value) => {
      setSearch(value);
    },
    // delay in ms
    300
  );
  
  useEffect(() => {
    dispatch(getAssets({ name: search }));
  }, [dispatch, search, message]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCheckChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    assetId: number
  ) => {
    if (event?.target?.checked) setAssetId([...assetIdCheck, assetId]);
    else {
      setAssetId(assetIdCheck?.filter((e) => e !== assetId));
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenConfirm(true)
    setAlertMessage("Do you want to allocate asset?")
   
    setOpen(false);
  };
  const handleOK = () =>{
    dispatch(allocateAssets(employeeDetails?.empId, assetIdCheck));
    setOpenConfirm(false)
    setOpenAlert(true)
    setAssetId([]);
    setAlertMessage('Asset Allocated')
   // navigate("/admin/employee/");
  }
  const handleCancel= () =>{
    setOpenConfirm(false)
  }
  const setNavigate =()=>{
    setOpenAlert(false)
   
  }
  return (
    <>
      {/* Allocate an Asset */}
      {openConfirm &&<Confirm  title={alertMessage} handleOk={handleOK} handlecancel={handleCancel}></Confirm>}
      {openAlert ? (<Alert title={alertMessage} setNavigate={setNavigate}/>): (<> </>)}
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Typography
              variant="h6"
              sx={{ margin: "10px", fontWeight: "bold" }}
            >
              Allocate Asset
            </Typography>
            <TextField
              label="search here by name..."
              onChange={(e) => debounced(e?.target?.value)}
            ></TextField>
            <TableContainer sx={{ maxHeight: "350px" }} component={Paper}>
              {loading ? (
                <CircularProgress />
              ) : assets?.length ? (
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Asset Name
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        AssetID
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Allocate
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {assets?.map((asset) => (
                      <TableRow
                        key={asset?.assetId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {asset?.name}
                        </TableCell>
                        <TableCell align="right">{asset?.assetId}</TableCell>
                        <TableCell align="right">
                          <Checkbox
                            sx={{ color: "darkblue" }}
                            onChange={(event) =>
                              handleCheckChange(event, asset?.assetId)
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Typography textAlign={"center"}>No Assets found!</Typography>
              )}
            </TableContainer>
            <DialogActions> </DialogActions>
          </DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              margin: "30px 25px",
            }}
          >
            <Button
              disabled={assetIdCheck?.length ? false : true}
              type="submit"
              variant="contained"
            >
              Allocate
            </Button>
          </Box>
        </form>
      </Dialog>
    </>
  );
};
export default AllocateAsset;