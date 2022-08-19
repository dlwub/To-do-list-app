import './style.css';

const listHolder = document.getElementById('list-holder');
const listArr = [
  {
    description: 'cook meal',
    completed: false,
    id: 0,
  },
  {
    description: 'clean the room',
    completed: false,
    id: 1,
  },
  {
    description: 'make physical exercise',
    completed: false,
    id: 2,
  }];

const displayList = (listArr) => {
  listArr.forEach((item) => {
    listHolder.innerHTML += `
  <div class="item-row">
    <div class="list-item">
      <input id="${item.id}" class="list-box" type="checkbox" name="${item.id}" value="${item.description}">
      <label for="${item.id}">${item.description}</label><br>
    </div>
    <span><i id="ell-${item.id}" class="fa fa-ellipsis-v icons"></i></span>
  </div>
  `;
  });
};

window.addEventListener('load', () => {
  displayList(listArr);
});
