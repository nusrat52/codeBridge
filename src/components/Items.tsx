import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Data } from "../store/todo/models/Data";
import Item from "./item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { dataFilterer } from "../statics/functions";
interface RootState {
  data: {
    data: Data[];
    error: string;
  };
}
interface props {
  searchInput: string;
}
const Items: React.FC<props> = ({ searchInput }) => {
  const data = useSelector(
    (DefaultRootState: RootState) => DefaultRootState.data
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {dataFilterer(searchInput, data).map((itemData) => {
          return <Item key={itemData.id} cardDetails={itemData} />;
        })}
      </Grid>
    </Box>
  );
};

export default Items;
