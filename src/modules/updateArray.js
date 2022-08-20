const updateArray = (taskArray) => {
  taskArray.forEach((task) => {
    task.id = taskArray.indexOf(task);
  });
};

export default updateArray;