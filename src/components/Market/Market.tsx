import React, { useContext, useEffect, useState } from 'react';
import { BetslipContext } from '../../contexts/MarketsSelectionContext';
import { MarketComponentProps } from '../../interfaces/Market';
import { SelectionInterface } from '../../interfaces/Selection';
import { Selection } from "../Selection/Selection";
import { ButtonsContainer, Container } from './styles';

export function Market({ market }: MarketComponentProps) {
  const [selected, setSelected] = useState({} as SelectionInterface);
  const { betslip, setBetslip } = useContext(BetslipContext);

  useEffect(() => {
    handleSelectionDeletion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [betslip])

  const handleUserSelection = (selection: SelectionInterface) => {
    if (!selection) return;
    setSelected(selection);
    handleAddSelection(selection);
  }

  const handleAddSelection = (selection: SelectionInterface) => {
    const cleanSelection = betslip.filter(({ id }) => id !== market.id);
    setBetslip([...cleanSelection, {...market, selection}]);
  }

  const handleSelectionDeletion = () => {
    const stillSelected = betslip.find(({ id }) => id === market.id);
    if (!stillSelected) setSelected({} as SelectionInterface);
  }

  return (
    <Container>
      <h3>{ market.name }</h3>
      <ButtonsContainer>
        { market.selections.map((selection: SelectionInterface) => (
          <Selection key={selection.id} selection={selection} handleUserSelection={handleUserSelection} isActive={selected.id === selection.id}/>
        ))}
      </ButtonsContainer>
    </Container>
  )
}