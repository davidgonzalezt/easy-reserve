import { Restaurant } from "@/types";
import axiosInstance from "./clientAxios";

export const getAvailableReserve = async (params: {
  customers: number;
  date: string;
  time: string;
}): Promise<Restaurant[]> => {
  const { data } = await axiosInstance.post<Restaurant[]>(
    "/api/restaurants/availability",
    params
  );
  return data ?? [];
};

export const reserveRestaurant = async (params: {
  customers: number;
  date: string;
  time: string;
  restaurantId: string
}) => {
  const { data } = await axiosInstance.post<Restaurant>(
    "/api/restaurants/reserve",
    params
  );
  return data;
};

