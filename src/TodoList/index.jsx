import Header from './components/Header'
import TaskList from './components/TaskList'
import Modal from './components/Modal'
import React, { useState } from "react";

const TodoList = () => {
   const [showModal, setShowModal] = useState(false);

   return (
      <div style={showModal ? {overflow: 'hidden'} : null}>
         <Header />
         <TaskList onOpenModal={() => setShowModal(true)}/>
         <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
      </div>
   );
};

export default TodoList;
