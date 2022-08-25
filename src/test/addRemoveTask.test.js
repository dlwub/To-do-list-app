import addTask from '../modules/addTask.js';
import getLocalStorage from '../modules/getStorage.js';
import 'jest-localstorage-mock';

describe('addTask and Delete', () => {
  test('should add a task to the taskArray', () => {
    addTask('Test task');
    const taskArray = getLocalStorage();
    expect(taskArray.length).toBe(1);
  });
});
