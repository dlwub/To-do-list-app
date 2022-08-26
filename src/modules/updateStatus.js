import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';

const updateStatus = (id, flag) => {
  const taskArray = getLocalStorage();
  taskArray[id - 1].completed = flag;
  setLocalStorage(taskArray);
};

export default updateStatus;