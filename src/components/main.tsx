import React, {useState} from "react";
import Search from "./Search";
import { Container } from "@mui/material";
import Items from "./Items";
function Main() {


  const [searchInput, setSearchInput] = useState('')

  return (
    <Container maxWidth="xl">
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Items searchInput={searchInput} />
    </Container>
  );
}

export default Main;
