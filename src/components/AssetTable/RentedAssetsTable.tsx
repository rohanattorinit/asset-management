import { TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

const AssetsTable = ({ category }: { category: string }) => {
  const { assets } = useSelector((state: RootStore) => state.admin);

  return (
    <>
      {assets
        ?.filter((asset) => asset?.assetType === category)
        .map((filteredAsset) => (
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
              {filteredAsset?.status?.toUpperCase()}
            </TableCell>
            <TableCell align="center">
              {filteredAsset?.usability?.toUpperCase()}
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};
export default AssetsTable;
