import React, { useState } from "react";
import {useSelector} from "react-redux"
import { Container, Typography } from "@mui/material";
import { RightArrow } from "../statics/svgs";
import { Link } from "react-router-dom";
interface RootState {
  detailedData: {
    id: number;
    imageUrl: string;
    title: string;
    publishedAt: string;
    summary: string;
  };
}
function Detailed() {





  const detailedData = useSelector(
    (DefaultRootState: RootState) => DefaultRootState.detailedData
  );
console.log(detailedData, 'detailedData');

  return (
    <div className="detailed">
      <div
        style={{
          backgroundImage: `url("${detailedData.imageUrl}")`,
        }}
        className="detailed__top"
      ></div>

      <Container maxWidth="xl">
        <div className="detailed__body">
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "400",
              textAlign: "center",
              marginTop: "35px",
            }}
          >
           {detailedData.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
          {detailedData.summary}
          </Typography>
        </div>
<Link to="/">
        <button className="detailed__back">
          <RightArrow />
          <span className="ml-2">Back to homepage</span>
        </button>
        </Link>
      </Container>
    </div>
  );
}

export default Detailed;
