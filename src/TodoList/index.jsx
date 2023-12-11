import Header from './components/Header'
import TaskList from './components/TaskList'
import Modal from './components/Modal'
import React, { useState, useEffect, useRef, useMemo } from "react";

const TodoList = () => {

   // Modal
   const [showModal, setShowModal] = useState(false);
   const modalField = useRef(null);

   const setAutofocusInModal = () => {
      setTimeout(() => {
         modalField.current.focus();
      }, 0);
   };

   const onOpenModal = () => {
      setShowModal(true);
      setAutofocusInModal();
   };

   const onCloseModal = () => {
      setShowModal(false);
   };

   //Task list
   const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
   const [editingTask, setEditingTask] = useState();

   //Add task
   const saveTask = (value) => {
      if (!editingTask) {
         setTaskList([...taskList, {
            id: Date.now(),
            text: value.trim(),
            done: false,
         }]);
      } else {
         let newTaskList = taskList.map(task => {
            if (task.id == editingTask.id) {
               task.text = value.trim();
            }
            return task;
         });
         setTaskList(newTaskList);
         setEditingTask();
      }
   };

   //Edit task
   const onEditTask = (id) => {
      let editedTask = taskList.find((task) => task.id == id);
      setEditingTask(editedTask);
      onOpenModal();
   };

   //Delete task
   const onDeleteTask = (id) => {
      let newTaskList = taskList.filter(task => task.id !== id);
      setTaskList(newTaskList);
   };

   //Mark finished task

   const onSetTaskMark = (id) => {
      let newTaskList = taskList.filter(task => {
         if (task.id == id) {
            task.done = !task.done;
         }
         return task;
      });
      setTaskList(newTaskList);
   };

   // Filter and search
   const [filterValue, setFilterValue] = useState(JSON.parse(localStorage.getItem('select')) || '');
   const [searchValue, setSearchValue] = useState('');

   const onChangeFilterValue = (evt) => {
      setFilterValue(evt.target.value);
   };

   const getTaskList = useMemo(() => {
      console.log(filterValue)
      if(!searchValue) {
      switch (filterValue) {
         case 'COMPLETE':
            return taskList.filter((task => task.done === true));
         case 'INCOMPLETE':
            return taskList.filter((task => task.done === false));
         case 'ALL':
            return taskList
      }
   } else {
      switch (filterValue) {
         case 'COMPLETE':
            return taskList.filter((task => task.done === true && 
               task.text.toUpperCase().indexOf(searchValue.trim().toUpperCase())!== -1));
         case 'INCOMPLETE':
            return taskList.filter((task => task.done === false && 
               task.text.toUpperCase().indexOf(searchValue.trim().toUpperCase())!== -1));
         case 'ALL':
            return taskList.filter((task => task.text.toUpperCase().indexOf(searchValue.trim().toUpperCase())!== -1));
      }
   }
   }, [filterValue, searchValue, taskList])

   // Local storage
   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(taskList));
      localStorage.setItem('select', JSON.stringify(filterValue));
   }, [taskList, filterValue]);


   return (
      <div>
         <Header changeFilterValue={onChangeFilterValue} 
         filterValue={filterValue} 
         searchValue={searchValue} 
         setSearchValue={setSearchValue}/>
         <TaskList
            onOpenModal={onOpenModal}
            getTaskList={getTaskList}
            onEditTask={onEditTask}
            onSetTaskMark={onSetTaskMark}
            onDeleteTask={onDeleteTask}
         />
         <Modal
            showModal={showModal}
            close={onCloseModal}
            saveTask={saveTask}
            editTask={editingTask}
            ref={modalField}
         />
      </div>
   );
};

export default TodoList;
