import { useState, useEffect } from 'react'
import './AlertsArea.css';
import SearchBar from '../SearchBar/SearchBar';
import AlertsManager from '../AlertsManager/AlertsManager';

function AlertsArea({onNewAlert, alertsRefresh}) {
  const [alerts, setAlerts] = useState([])

  useEffect(() => { // Load all alerts on mount and on refresh signal
    searchHandler('')
  }, [alertsRefresh]);

  const searchHandler = async search_term => {
    const trimmed = search_term.trim().toUpperCase();
    const isValidTicker = /^$|^[A-Z]{1,10}$/.test(trimmed);
  
    if (!isValidTicker) {
      setAlerts('')
    } else {
      try {
        const api_response = await fetch(`http://127.0.0.1:8000/alerts?search_term=${trimmed}`);
        const retrieved_alerts = await api_response.json();
        setAlerts(retrieved_alerts);
      } catch (err) {
        console.error(err)
      }
    }
  };

  return (
    <div id="alerts-area">
      <SearchBar searchHandler={searchHandler} />
      <AlertsManager onNewAlert={onNewAlert} alerts={alerts}/>
    </div>
  );
}

export default AlertsArea;