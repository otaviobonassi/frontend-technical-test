import React from "react";

export interface SelectionComponentProps extends React.HTMLAttributes<HTMLElement> {
  selection: SelectionInterface;
  handleUserSelection: (selection: SelectionInterface) => void;
  isActive: boolean;
}

export interface SelectionInterface {
  id: 'string';
  name: 'string';
  price: number;
}