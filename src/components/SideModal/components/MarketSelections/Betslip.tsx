import React, { useContext } from 'react';
import { BetslipContext } from '../../../../contexts/MarketsSelectionContext';
import { MarketSelectionsComponentProps } from '../../../../interfaces/Market';
import { SelectionInterface } from '../../../../interfaces/Selection';
import { DeleteButton, MarketSelections } from './styles';

export function MarketSelection({ marketSelections }: MarketSelectionsComponentProps) {
  const { name, selection } = marketSelections;
  const { betslip, setBetslip } = useContext(BetslipContext);

  const handleSelectionDelete = (selection: SelectionInterface) => {
    const filteredSelections = betslip.filter((bet) => bet.selection.id !== selection.id);
    setBetslip(filteredSelections);
  }

  return (
    <MarketSelections>
      <p>{ selection.name } { name }</p>
      <p>{ selection.price }</p>
      <DeleteButton onClick={() => handleSelectionDelete(selection)}> Delete </DeleteButton>
    </MarketSelections>
  )
}