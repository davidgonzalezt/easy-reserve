"use client"
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ReservationCard from '../molecules/ReservationCard';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Restaurant } from '@/types';

interface ReservationListProps {
  results: Restaurant[];
  fetchMoreResults: () => void;
  handleSearch: () => Promise<void>
}

const ReservationList: React.FC<ReservationListProps> = ({ results, fetchMoreResults, handleSearch }) => {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreResults);

  return (
    <Box my={4}>
      <Grid container spacing={2}>
        {results.map((result, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ReservationCard restaurant={result} handleSearch={handleSearch} />
          </Grid>
        ))}
      </Grid>
      {isFetching && (
        <Box display="flex" justifyContent="center" my={2}>
          <Typography>Cargando más resultados...</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ReservationList;
