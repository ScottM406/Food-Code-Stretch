const foodOrdered = document.querySelector(`#ordered-food`);
const foodDelivered = document.querySelector(`#delivered-food`);
const foodDeliveredList = foodDelivered.querySelector(`ol`);
const singleFoodOrdered = foodOrdered.querySelectorAll(`li`);

foodOrdered.addEventListener (`click`, (event) => {
  if (event.target.tagName = `LI`) {
    const newFoodDelivered = document.createElement(`li`);
    foodDeliveredList.append(newFoodDelivered);
    newFoodDelivered.innerText = event.target.innerText;
    event.target.innerText = '';
    event.target.remove();
  }
});