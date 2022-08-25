import addTask from '../modules/addTask.js';
import getLocalStorage from '../modules/getStorage.js';
import deleteTask from '../modules/removeTask.js';
import 'jest-localstorage-mock';

describe('addTask and Delete', () => {
  test('should add a task to the taskArray', () => {
    addTask('Test task');
    const taskArray = getLocalStorage();
    expect(taskArray.length).toBe(1);
  });
  test('should delete a task from the taskArray', () => {
    deleteTask(1);
    const taskArray = getLocalStorage();
    expect(taskArray.length).toBe(0);
  });
});
