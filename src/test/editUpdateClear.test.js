import getLocalStorage from '../modules/getStorage.js';
import setLocalStorage from '../modules/setStorage.js';
import 'jest-localstorage-mock';
import editTask from '../modules/editTask.js';
import addTask from '../modules/addTask.js';
import updateStatus from '../modules/updateStatus.js';
import removeTask from '../modules/removeTask.js';
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
  test('Clear all completed tasks', () => {
    setLocalStorage([]); // Clear the local storage
    addTask('one');
    addTask('two');
    addTask('three');
    updateStatus(1, true);
    updateStatus(3, true);
    removeTask(-1);
    const taskArray = getLocalStorage();
    expect(taskArray.length).toBe(1);
  });
  test("Updates an item's completed status", () => {
    setLocalStorage([]); // Clear the local storage
    addTask('one');
    addTask('two');
    addTask('three');
    updateStatus(2, true);
    const taskArray = getLocalStorage();
    const status = taskArray.map((task) => task.completed);
    expect(status).toEqual([false, true, false]);
  });
});
