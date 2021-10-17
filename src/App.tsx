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

  if (!events.length) return (
    <div className="loading">
      <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
          <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="1s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );

  return (
    <SideModalProvider>
      <MarketSelectionsProvider>
        <Home events={events} />
      </MarketSelectionsProvider>
    </SideModalProvider>
      
  );
}

export default App;
