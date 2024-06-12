"use client"

import { getAvailableReserve } from "@/clients/reserve";
import ReservationForm from "@/components/molecules/ReservationForm";
import MainTemplate from "@/components/organisms/MainTemplate";
import ReservationList from "@/components/organisms/ReservationList";
import { Context } from "@/contex";
import { Restaurant } from "@/types";
import { useContext, useState } from "react";

const HomePage: React.FC = () => {
  const [results, setResults] = useState<Restaurant[]>([]);
  const { date, customers, time } = useContext(Context);

  const handleSearch = async () => {
    if (date && time && customers) {
      const data = await getAvailableReserve({ date, time, customers });
      setResults(data)
    } else {
      alert("Por favor complete todos los campos");
    }
  };
  

  const handleReserve = (index: number) => {
    alert(`Reserva realizada para el restaurante: ${results[index].name}`);
  };

  const fetchMoreResults = () => {
    /* setTimeout(() => {
      setResults(prevResults => [
        ...prevResults,
        ...mockRestaurants
      ]);
    }, 2000); */
  };

  return (
    <MainTemplate>
      <ReservationForm onSearch={handleSearch} />
      <ReservationList handleSearch={handleSearch} results={results} fetchMoreResults={fetchMoreResults} />
    </MainTemplate>
  );
};

export default HomePage;
