import React from 'react';
import Button from 'ui/Button'
import EmptyListIcon from './components/EmptyListIcon'
import Task from './components/Task'
import styles from './styles.module.scss'

const TaskList = ({onOpenModal, getTaskList, onEditTask, onSetTaskMark, onDeleteTask}) => {
  
   return (
      <section className={styles.main}>
         <EmptyListIcon isTaskListEmpty={getTaskList.length === 0}/>
         <ul className={styles.main_list}>
         <Task getTaskList={getTaskList} onEditTask={onEditTask} onSetTaskMark={onSetTaskMark} onDeleteTask={onDeleteTask}/>
         </ul>
         <div className={styles.main_modal_btn_wrapper}>
            <Button innerClass={styles.main_modal_btn} type='button' onClick={onOpenModal}></Button>
         </div>
      </section>
   );
};

export default TaskList;