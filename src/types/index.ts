export interface Restaurant {
  id:      string;
  name:    string;
  address: string;
  tables:  Table[];
}

export interface Table {
  id:           number;
  size:         number;
  reservations: Reservation[];
}

export interface Reservation {
  date: Date;
  time: string;
}

export interface ReserveToSearch {
  date?: string;
  time?: string;
  customers?: number;
}

export interface ContextI extends ReserveToSearch {
  updateState: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export enum Types {
  UPDATE_STATE = "UPDATE_STATE",
}

export interface Actions {
  type: Types;
  payload: ReserveToSearch;
}
