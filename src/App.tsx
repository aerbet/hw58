import { useState } from 'react';
import './App.css';
import AlertItem from './components/Alert/AlertItem';
import Modal from "./components/Modal/Modal";

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

  const [showModal , setShowModal] = useState(false);

  const closeAlert = (id: number) => {
    setAlerts(alerts => alerts.filter(alert => alert.id !== id));
  };

  return (
    <>
      {alerts.map(alert => (
        <AlertItem key={alert.id} id={alert.id} type={alert.type} message={alert.message} onDismiss={closeAlert} />
      ))}
      <button className="w-100 btn btn-primary" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <Modal show={showModal} title="Alert Modal" onClose={() => setShowModal(false)}>
        <div className="modal-body">
          Content
        </div>
      </Modal>
    </>
  );
}

export default App;