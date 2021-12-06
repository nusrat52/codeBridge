import React from "react";
import { Box, InputAdornment, TextField, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { Data } from "../store/todo/models/Data"
import { dataFilterer } from "../statics/functions";
interface props {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}
interface RootState {
  data: {
    data: Data[];
    error: string;
  };
}
const Search: React.FC<props> = ({ searchInput, setSearchInput }) => {
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };
  const data = useSelector(
    (DefaultRootState: RootState) => DefaultRootState.data
  );

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "70ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <InputLabel className="label" htmlFor="input-with-icon-adornment">
          Filter by keywords
        </InputLabel>

        <TextField
          onChange={inputChange}
          value={searchInput}
          className="search__input"
          id="input-with-icon-textfield"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        component="h3"
        sx={{
          typography: "subtitle2",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "600",
          marginTop: "40px",
          paddingLeft: "10px",
          borderBottom: "1px solid #EAEAEA;",
        }}
      >
        Results: {dataFilterer(searchInput, data).length}
      </Box>
    </>
  );
};

export default Search;
