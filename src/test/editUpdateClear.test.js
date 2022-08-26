import getLocalStorage from '../modules/getStorage.js';
import setLocalStorage from '../modules/setStorage.js';
import 'jest-localstorage-mock';
import editTask from '../modules/editTask.js';
import addTask from '../modules/addTask.js';
import displayList from '../modules/displayList.js';

describe('Edit task, update status, and clear completed', () => {
  test('should edit the description of a task', () => {
    document.body.innerHTML = '<div id="list-holder"></div>';
    addTask('one');
    addTask('two');
    let taskArray = getLocalStorage();
    displayList(taskArray);
    editTask(1);
    taskArray = getLocalStorage();
    const editable = document.getElementById('label-1');
    expect(taskArray[0].description).toEqual(editable.textContent);
    setLocalStorage(taskArray);
  });   
});
