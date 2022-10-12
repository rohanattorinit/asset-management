import {
  Button,
  Checkbox,
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
  const { employeeDetails, assets } = useSelector(
    (state: RootStore) => state.admin
  );

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setSearch(value);
    },
    // delay in ms
    300
  );

  useEffect(() => {
    dispatch(getAssets({ allocate: true, name: search }));
  }, [dispatch, search]);

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
    dispatch(allocateAssets(employeeDetails?.empId, assetIdCheck));
    setAssetId([]);
    setOpen(false);
  };
  return (
    <>
      {/* Allocate an Asset */}
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

            {assets.length ? (
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

                <DialogActions>
                  <Button
                    disabled={assetIdCheck?.length ? false : true}
                    type="submit"
                    variant="contained"
                  >
                    Allocate
                  </Button>
                </DialogActions>
              </TableContainer>
            ) : (
              <Typography textAlign={"center"}>No Assets found!</Typography>
            )}
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default AllocateAsset;
