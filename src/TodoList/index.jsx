import Header from './components/Header'
import TaskList from './components/TaskList'
import Modal from './components/Modal'
import React, { useState, useEffect, useRef, useMemo } from "react";
import { getTask } from '../utils';
import { useLocalStorage } from '../hooks/useLocalStorage';

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
   const [filterValue, setFilterValue] = useState(localStorage.getItem('select') || 'ALL');
   const [searchValue, setSearchValue] = useState('');

   const onChangeFilterValue = (evt) => {
      setFilterValue(evt.target.value);
   };

   const getTaskList = useMemo(() => {
      switch (filterValue) {
         case 'COMPLETE':
            return getTask(taskList, true, searchValue);
         case 'INCOMPLETE':
            return getTask(taskList, false, searchValue);
         case 'ALL':
            return getTask(taskList, null, searchValue);
      }
   }, [filterValue, searchValue, taskList])

   // Local storage
   useLocalStorage(taskList, filterValue);

   return (
      <div>
         <Header
            changeFilterValue={onChangeFilterValue} 
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
