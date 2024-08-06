import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  return (
    <div className="App">
     <h1> React Portal Example </h1>
     <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>Modal Content</h1>
        <p>This is a modal dialog!</p>
      </Modal>
    </div>
  );
}

export default App;
