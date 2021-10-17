import React, { useContext } from 'react';
import { BackgroundContainer, CancelButton, ModalContent, ModalHeader, ModalMain } from './styles';
import cancelIcon from '../../assets/cancel.png';
import { SideModalContext } from '../../contexts/SideModalContext';
import { BetslipContext } from '../../contexts/MarketsSelectionContext';
import { MarketSelection } from './components/MarketSelections/Betslip';

export function SideModal() {
  const { setIsOpen } = useContext(SideModalContext);
  const { betslip } = useContext(BetslipContext);

  const handleClose = (evt: React.MouseEvent) => {
    const { className } = evt.target as HTMLElement;
    if (className.includes('close-modal')) setIsOpen(false)
  }

  return (
    <BackgroundContainer onClick={handleClose} className="close-modal">
      <ModalContent>
        <ModalHeader>
          <CancelButton onClick={handleClose} className="close-modal">
            <img src={cancelIcon} alt="" className="close-modal"/>
          </CancelButton>
        </ModalHeader>
        <ModalMain>
          { betslip.map(bet => <MarketSelection key={bet.id} marketSelections={bet} />) }
        </ModalMain>
      </ModalContent>
    </BackgroundContainer>
  )
}