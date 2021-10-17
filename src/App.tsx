import React, { useEffect, useState } from 'react';
import { api } from './services/HttpRequest/httpRequest.service';

import { Home } from "./views/Home/Home";

import { EventInterface } from './interfaces/Event';
import { EventsRequest } from './interfaces/Requests';
import SideModalProvider from './contexts/SideModalContext';
import MarketSelectionsProvider from './contexts/MarketsSelectionContext';
import Loading from './assets/loading.gif';

function App() {
  const [events, setEvents] = useState<EventInterface[]>([]);

  const getData = async () => {
    const { data } = await api.get('/59f08692310000b4130e9f71/') as EventsRequest;
    setEvents(data);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!events.length) return (
    <div className="loading">
      <img src={Loading} alt="Loading..."/>
    </div>
  )

  return (
    <SideModalProvider>
      <MarketSelectionsProvider>
        <Home events={events} />
      </MarketSelectionsProvider>
    </SideModalProvider>
      
  );
}

export default App;
