import setLocalStorage from './setStorage.js';
import getLocalStorage from './getStorage.js';
import Task from './Task.js';

const addTask = (description) => {
  // Add task to taskArray
  if (description) {
    let taskArray = getLocalStorage();
    const task = new Task(description, false, taskArray.length + 1);
    taskArray = [...taskArray, task];
    setLocalStorage(taskArray);
  }
};

export default addTask;
