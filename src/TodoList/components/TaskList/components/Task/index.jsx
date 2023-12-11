import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import Button from 'ui/Button';
import IconButton from 'ui/IconButton';

const Task = ({ getTaskList, onEditTask, onSetTaskMark, onDeleteTask }) => {

    return (
        <div> {
            getTaskList.map(task => {
                return (
                    <li className={cn(styles.list_item, {
                        [styles.checked]: task.done})} id={task.id} key={task.id}>
                        <Button innerClass={cn(styles.list_item_btn, {
                            [styles.btn_checked]: task.done})} type='button' onClick={() => { onSetTaskMark(task.id) }} />
                        <span className={styles.list_item_text}>{task.text}</span>
                        <div className={styles.list_item_btn_wrapper}>
                            <IconButton innerClass={styles.list_item_btn_edit} onClick={()=> {onEditTask(task.id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                                    fill="none">
                                    <path className={styles.list_item_path}
                                        d="M7.67272 3.99106L1 10.6637V14H4.33636L11.0091 7.32736M7.67272 3.99106L10.0654 1.59837L10.0669 1.59695C10.3962 1.26759 10.5612 1.10261 10.7514 1.04082C10.9189 0.986392 11.0993 0.986392 11.2669 1.04082C11.4569 1.10257 11.6217 1.26735 11.9506 1.59625L13.4018 3.04738C13.7321 3.37769 13.8973 3.54292 13.9592 3.73337C14.0136 3.90088 14.0136 4.08133 13.9592 4.24885C13.8974 4.43916 13.7324 4.60414 13.4025 4.93398L13.4018 4.93468L11.0091 7.32736M7.67272 3.99106L11.0091 7.32736"
                                        stroke="#CDCDCD" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </IconButton>
                            <IconButton innerClass={styles.list_item_btn_delete} onClick={() => { onDeleteTask(task.id) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none">
                                    <path className={styles.list_item_path}
                                        d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
                                        stroke="#CDCDCD" />
                                    <path className={styles.list_item_path} d="M14.625 3.75H3.375" stroke="#CDCDCD"
                                        strokeLinecap="round" />
                                    <path className={styles.list_item_path}
                                        d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
                                        stroke="#CDCDCD" />
                                    <path className={styles.list_item_path} d="M10.5 9V12.75" stroke="#CDCDCD"
                                        strokeLinecap="round" />
                                    <path className={styles.list_item_path} d="M7.5 9V12.75" stroke="#CDCDCD"
                                        strokeLinecap="round" />
                                </svg>
                            </IconButton>
                        </div>
                    </li>)
            })
        }
        </div>
    );
};

export default Task;