import { TradeInFilterState } from "./../types/tradeins.types";
import create from "zustand";

export const useTradeinFilterState = create<TradeInFilterState>((set) => ({
  tradeInStatus: "",
  textQuery: "",
  setTradeInStatus: (tradeInStatus: string) => set({ tradeInStatus }),
  setTextQuery: (textQuery: string) => set({ textQuery }),
}));
