import React, { useState, createContext } from 'react';

export const SideModalContext = createContext<ContextInterface>({isOpen: false, setIsOpen: () => {}});

interface ContextInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: React.ReactNode
}

export default function SideModalProvider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideModalContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </SideModalContext.Provider>
  )
}