import Header from './components/Header'
import TaskList from './components/TaskList'
import Modal from './components/Modal'
import React, { useState, useEffect } from "react";

const TodoList = () => {
   const [showModal, setShowModal] = useState(false);
   const closeModal = () => {
      setShowModal(false);
      setValue('');
   };

   const [taskList, setTaskList] = useState([
      {
         id: 1,
         text: 'новый текст',
         done: false,
      },
      {
         id: 2,
         text: 'новый текст-2',
         done: false,
      },
      {
         id: 3,
         text: 'новый текст-3',
         done: false,
      }
   ]);

   const [value, setValue] = useState('');
   const [disabled, setDisabled] = useState(true);
   useEffect(() => {setDisabled(!value.trim())}, [value]);

   const saveTask = () => {
      setTaskList([...taskList, {
         id: Date.now(),
         text: value,
         done: false,
      }]);
      setValue('');
      setShowModal(false);
   };

   return (
      <div>
         <Header />
         <TaskList onOpenModal={() => setShowModal(true)} taskList={taskList} setTaskList={setTaskList} />
         <Modal showModal={showModal} onClose={closeModal} taskList={taskList} setTaskList={setTaskList}
          value={value} setValue={setValue} disabled={disabled} saveTask={saveTask}/>
      </div>
   );
};

export default TodoList;
