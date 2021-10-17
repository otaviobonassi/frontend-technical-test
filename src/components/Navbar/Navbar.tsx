import React, { useContext } from 'react';
import { NavbarContainer, HamburgerMenu, Content } from './styles';
import hamburgerMenu from '../../assets/menu.png';
import { SideModalContext } from '../../contexts/SideModalContext';

export function Navbar() {
  const { setIsOpen } = useContext(SideModalContext);

  const handleOpenMenu = () => {
    setIsOpen(true)
  }
  
  return (
    <NavbarContainer>
      <Content>
        <HamburgerMenu onClick={handleOpenMenu} data-testid="menu-opener">
          <img src={hamburgerMenu} alt="" />
        </HamburgerMenu>
      </Content>
    </NavbarContainer>
  )
}