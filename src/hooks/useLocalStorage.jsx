import { useEffect} from "react";

export const useLocalStorage = (taskList, filterValue) => {
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
        localStorage.setItem('select', filterValue);
     }, [taskList, filterValue]);
}