import React, { useContext } from "react";
import { Container, Grid, MenuItem, Typography } from "@mui/material";
import TextField from "../atoms/TextField";
import Button from "../atoms/Button";
import { Context } from "@/contex";

const timeOptions = [
  "00:00", "00:45", "01:30", "02:15", "03:00", "03:45", "04:30", "05:15",
  "06:00", "06:45", "07:30", "08:15", "09:00", "09:45", "10:30", "11:15",
  "12:00", "12:45", "13:30", "14:15", "15:00", "15:45", "16:30", "17:15",
  "18:00", "18:45", "19:30", "20:15", "21:00", "21:45", "22:30", "23:15",
];

interface ReservationFormProps {
  onSearch: () => Promise<void>;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSearch }) => {
  const { date, customers, time, updateState } = useContext(Context);

  const currentDate = new Date().toISOString().split('T')[0];


  let filteredTimeOptions = timeOptions;
  if (date === currentDate) {
    const currentTime = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentHour = `${currentTime.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`;

    filteredTimeOptions = timeOptions.filter(option => option > currentHour);
  }

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        This is an app that helps you find restaurants with available seating. You can enter the date, time, and number of customers, and the app will search for restaurants that can accommodate your party.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            name="date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={updateState}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="time"
            select
            label="Hour"
            value={time}
            onChange={updateState}
            fullWidth
          >
            {filteredTimeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="customers"
            label="Customer numbers"
            type="number"
            fullWidth
            value={customers}
            onChange={updateState}
          />
        </Grid>
      </Grid>
      <Button
        sx={{ marginTop: 5 }}
        label="Search"
        variant="contained"
        color="primary"
        fullWidth
        onClick={onSearch}
      />
    </Container>
  );
};

export default ReservationForm;
