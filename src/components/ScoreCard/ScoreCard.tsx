import React from 'react';
import { MarketInterface } from '../../interfaces/Market';
import { ScoreCardComponentProps } from '../../interfaces/ScoreCard';
import { Market } from '../Market/Market';
import { Container, Header, Section } from './styles';

export function ScoreCard({ event }: ScoreCardComponentProps) {
  return (
    <Container>
        <Header>
          <h2>{ event.name }</h2>
        </Header>
      { event.markets.map((market: MarketInterface) => (
        <Section key={market.id}>
          <Market market={ market }/>
        </Section>
      )) }
    </Container>
  )
}