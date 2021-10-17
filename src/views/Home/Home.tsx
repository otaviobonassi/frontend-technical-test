import React, { useContext } from 'react';

import { Navbar } from '../../components/Navbar/Navbar';
import { ScoreCard } from '../../components/ScoreCard/ScoreCard';
import { SideModal } from '../../components/SideModal/SideModal';
import { Loading } from '../../components/Loading/Loading';
import { SideModalContext } from '../../contexts/SideModalContext';
import { EventProps } from '../../interfaces/Event';
import './home.style.scss';

export function Home({ events }: EventProps) {

  const { isOpen } = useContext(SideModalContext);

  const renderRegularContent = () => events.map((event) => {
    if (event.markets.length) return <ScoreCard event={event} key={event.id}/>;
    return null;
  })

  return (
    <div className="container">
      <Navbar/>
      <div className="content">
        { events.length ? renderRegularContent() : <Loading/> }
      </div>
      { isOpen && <SideModal/> }
    </div>
  );
}