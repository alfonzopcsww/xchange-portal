import { TradeInFilterState } from "./tradeins.types";
import { MakeGenerics } from "@tanstack/react-location";

type Search = TradeInFilterState;

export type AuthenticatedLocationGenerics = MakeGenerics<{
  LoaderData: {
    tradeIns: [];
  };
  Params: {};
  Search: Partial<Search>;
}>;
