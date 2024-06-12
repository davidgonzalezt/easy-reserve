"use client"
import { Actions, ContextI, ReserveToSearch, Types } from "@/types";
import { ReactNode, createContext, useReducer } from "react";

const initialState: ReserveToSearch = {
  date: "",
  time: "",
  customers: 0,
};

export const Context = createContext<ContextI>({
  ...initialState,
  updateState: () => null,
});

const ContextState = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateState = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch({
      type: Types.UPDATE_STATE,
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Context.Provider value={{ ...state, updateState }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextState;

const reducer = (state: ReserveToSearch, action: Actions): ReserveToSearch => {
  switch (action.type) {
    case Types.UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
