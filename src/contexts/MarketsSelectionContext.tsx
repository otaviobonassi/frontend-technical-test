import React, { createContext, useState } from 'react';
import { BetslipInterface } from '../interfaces/Market';

export const BetslipContext = createContext<ContextProvider>({ betslip: [], setBetslip: () => {} });

interface Props {
  children: React.ReactNode;
}

interface ContextProvider {
  betslip: BetslipInterface[];
  setBetslip: React.Dispatch<React.SetStateAction<BetslipInterface[]>>;
}

export default function MarketSelectionsProvider({ children }: Props) {
  const [betslip, setBetslip] = useState([] as BetslipInterface[]) ;

  return (
      <BetslipContext.Provider value={{ betslip, setBetslip }}>
        { children }
      </BetslipContext.Provider>
  )
}