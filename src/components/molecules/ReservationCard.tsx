"use client";
import React, { useContext } from "react";
import { Card, CardContent, Button as MuiButton } from "@mui/material";
import Typography from "../atoms/Typography";
import { Context } from "@/contex";
import { reserveRestaurant } from "@/clients/reserve";
import { Restaurant } from "@/types";

interface ReservationCardProps {
  restaurant: Restaurant;
  handleSearch: () => Promise<void>
}

const ReservationCard: React.FC<ReservationCardProps> = ({ restaurant, handleSearch }) => {
  const { customers, date, time } = useContext(Context);
  const { name, address, id, tables } = restaurant;
  const handleReserve = async () => {
    if (customers && date && time) {
      try {
        await reserveRestaurant({ customers, date, time, restaurantId: id });
        alert("Reserved")
        handleSearch()
      } catch (error) {
        console.log(error)
      }
    
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3" text={name} />
        <Typography color="textSecondary" text={`Address: ${address}`} />
        <Typography color="textSecondary" text={`${tables.length} Available`} />
        <MuiButton
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleReserve}
        >
          Book
        </MuiButton>
      </CardContent>
    </Card>
  );
};

export default ReservationCard;
