import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allocateAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const AllocateAsset = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [search, setSearch] = useState("");
  const [assetIdCheck, setAssetId] = useState<number[]>([]);

  const dispatch: Dispatch<any> = useDispatch();

  const handleChange = (e: any) => {
    setSearch(e?.target?.value);
  };
  const { employeeDetails, assets } = useSelector(
    (state: RootStore) => state.admin
  );
  const handleClose = () => {
    setOpen(false);
  };

  const filteredAsset = assets?.filter((asset) => {
    if (search?.length === 0) {
      return asset?.status === "available" && asset?.usability === "usable";
    }
    return (
      asset?.status === "available" &&
      asset?.usability === "usable" &&
      asset?.name?.toLowerCase()?.includes(search?.toLowerCase())
    );
  });

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
    dispatch(allocateAssets(employeeDetails?.empId, assetIdCheck));
    setAssetId([]);
    setOpen(false);
  };
  return (
    <>
      {/* Allocate an Asset */}
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Allocate Asset</DialogTitle>
          <DialogContent>
            <TextField
              label="search by AssetName..."
              onChange={handleChange}
              value={search}
            ></TextField>
            <TableContainer component={Paper}>
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
                  {filteredAsset?.map((asset) => (
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
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button type="submit" variant="contained">
              Allocate
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AllocateAsset;
