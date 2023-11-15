import { useState } from 'react';
import './App.css';
import AlertItem from './components/Alert/AlertItem';

interface AlertItem {
  id: number;
  type: 'primary' | 'success' | 'danger' | 'warning';
  message: string;
}

function App() {
  const [alerts, setAlerts] = useState<AlertItem[]>([
    { id: 1, type: 'warning', message: 'This is a warning type alert' },
    { id: 2, type: 'success', message: 'This is a success type alert' },
  ]);

  const closeAlert = (id: number) => {
    setAlerts(alerts => alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="App">
      {alerts.map(alert => (
        <AlertItem key={alert.id} id={alert.id} type={alert.type} message={alert.message} onDismiss={closeAlert} />
      ))}
    </div>
  );
}

export default App;