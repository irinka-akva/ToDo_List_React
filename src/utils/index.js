const isSame = (text, searchValue) => searchValue ? text.toUpperCase().indexOf(searchValue.trim().toUpperCase()) !== -1 : true;

const isCondition = (condition, task) => condition === null ? true : task.done === condition

export const getTask = (taskList, condition, searchValue) => taskList.filter(task => isCondition(condition, task) && isSame(task.text, searchValue));