import { MarketInterface } from "./Market";

export interface EventProps {
  events: EventInterface[];
}

export interface EventInterface {
  id: string;
  name: string;
  markets: MarketInterface[];
}