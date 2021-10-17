import React, { useEffect, useState } from 'react';
import { api } from './services/HttpRequest/httpRequest.service';

import { Home } from "./views/Home/Home";

import { EventInterface } from './interfaces/Event';
import { EventsRequest } from './interfaces/Requests';
import SideModalProvider from './contexts/SideModalContext';
import MarketSelectionsProvider from './contexts/MarketsSelectionContext';
import ErrorComponent from './components/Error/ErrorComponent';

function App() {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await api.get('/59f08692310000b4130e9f71/') as EventsRequest;
      setEvents(data);
    } catch {
      setError(true)
    }
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  if (error) return <ErrorComponent/>;

  return (
    <SideModalProvider>
      <MarketSelectionsProvider>
        <Home events={events}/>
      </MarketSelectionsProvider>
    </SideModalProvider>
      
  );
}

export default App;
