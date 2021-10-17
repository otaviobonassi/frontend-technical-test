import { SelectionInterface } from "./Selection";

export interface MarketComponentProps {
  market: MarketInterface;
}

export interface MarketSelectionsComponentProps {
  marketSelections: BetslipInterface;
}

export interface MarketInterface {
  id: string;
  name: string;
  selections: SelectionInterface[];
}

export interface BetslipInterface {
  id: string;
  name: string;
  selection: SelectionInterface;
}