import React from 'react';
import { ErrorContainer } from './styles';
import ErrorImg from '../../assets/warning.png';

export default function ErrorComponent() {
  return (
    <ErrorContainer>
      <img src={ErrorImg} alt="" />
      <h1>Ops, something went wrong. Please try again later.</h1>
    </ErrorContainer>
  )
}