import React from 'react';
import Button from 'ui/Button'
import EmptyListIcon from './components/EmptyListIcon'
import Task from './components/Task'
import styles from './styles.module.scss'

const TaskList = ({onOpenModal, taskList, setTaskList}) => {
   return (
      <section className={styles.main}>
         <EmptyListIcon/>
         <ul className={styles.main_list}>
         <Task taskList={taskList} setTaskList={setTaskList}/>
         </ul>
         <div className={styles.main_modal_btn_wrapper}>
            <Button innerClass={styles.main_modal_btn} type='button' onClick={onOpenModal}></Button>
         </div>
      </section>
   );
};

export default TaskList;