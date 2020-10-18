const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.addItems');
const groceryList = document.querySelector('.items');
const list = document.querySelectorAll('.items li'); 

let listLenght = list.lenght;

const generateTempalate = (item) => {
  
  const html = `<li>
                  <input type="checkbox" id="item_${listLenght}">
                  <label for="item_${listLenght}">
                    <span class="check"></span>
                    ${item}
                  </label>
                  <i class="fas fa-minus"></i>
                </li>`
  groceryList.innerHTML += html;
};

function addItems(e) {
  e.preventDefault();
  const item = submitForm.add.value.trim();
  if (item.length) {
    listLenght = listLenght + 1;
    generateTempalate(item);
    submitForm.reset();
  }
}

submitForm.addEventListener('submit', addItems);
addButton.addEventListener('click', addItems);

function deleteItems(e) {
  if (e.target.classList.contains('fa-minus')) {
    e.target.parentElement.remove();
  }
}

groceryList.addEventListener('click', deleteItems);