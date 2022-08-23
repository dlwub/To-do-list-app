import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';

const editTask = (id) => {
  const editable = document.getElementById(`label-${id}`);
  editable.contentEditable = 'true';
  editable.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    const taskArray = getLocalStorage();
    taskArray[id-1].description = editable.textContent;
    setLocalStorage(taskArray);
    });
};

export default editTask;