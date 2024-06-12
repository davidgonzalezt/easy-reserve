"use client";
import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ReservationCard from "../molecules/ReservationCard";
import { Restaurant } from "@/types";

interface ReservationListProps {
  results: Restaurant[];
  fetchMoreResults: () => void;
  handleSearch: () => Promise<void>;
}

const ReservationList: React.FC<ReservationListProps> = ({
  results,
  handleSearch,
}) => {

  return (
    <Box my={4}>
      <Grid container spacing={2}>
        {results.length ? (
          results.map((result, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ReservationCard
                restaurant={result}
                handleSearch={handleSearch}
              />
            </Grid>
          ))
        ) : (
          <Box display="flex" justifyContent="center" my={2}>
            <Typography>There is not results</Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default ReservationList;
