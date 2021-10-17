import React from 'react';
import { SelectionComponentProps } from "../../interfaces/Selection";
import { SelectionButton } from "./styles";

export function Selection({ selection, handleUserSelection, isActive }: SelectionComponentProps) {

  return (
    <SelectionButton isActive={isActive} onClick={() => handleUserSelection(selection)} value={selection.id}>
      { selection.name }
      <br/>
      { new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'EUR'
      }).format(selection.price) }
    </SelectionButton>
  )
}