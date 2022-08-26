import displayList from '../modules/displayList.js';
import addTask from '../modules/addTask.js';
import getLocalStorage from '../modules/getStorage.js';
import removeTask from '../modules/removeTask.js';
import 'jest-localstorage-mock';
import setLocalStorage from '../modules/setStorage.js';

describe('', () => {
  test('Diplay tasks in on the page', () => {
    document.body.innerHTML = '<div id="list-holder"></div>';
    setLocalStorage([]);
    addTask('One');
    addTask('Two');
    addTask('Three');
    removeTask(1);
    displayList(getLocalStorage());
    expect(document.getElementById('list-holder').children.length).toBe(2);
  });
});