window.addEventListener("load", solve);

function solve() {
  const fNameElement = document.querySelector('#first-name');
  const lNameElement = document.querySelector('#last-name');
  const ageElement = document.querySelector('#age');
  const generElement = document.querySelector('#genderSelect');
  const descriprionElement = document.querySelector('#task');
  const dishesInProgres = document.querySelector('#progress-count');
  const finalUl = document.querySelector("#finished");
  const clearBtn = document.querySelector("#clear-btn")

  const submitButton = document.querySelector('#form-btn');

  submitButton.addEventListener('click', makeTask);

  function makeTask(event) {
      event.preventDefault();

      const fName = fNameElement.value;
      const lName = lNameElement.value;
      const age = ageElement.value;
      const gender = generElement.value;
      const describtion = descriprionElement.value;

      if (
          fName === '' ||
          lName === '' ||
          age === '' ||
          describtion === ''
      ) {
          return;
      }

      const ulInfoList = document.querySelector('#in-progress');

      const liElement = document.createElement('li');
      liElement.classList.add('each-line');

      const articleElement = document.createElement('article');

      const h4NamesElement = document.createElement('h4');
      h4NamesElement.textContent = `${fName} ${lName}`;

      const personDataElement = document.createElement('p');
      personDataElement.textContent = `${gender}, ${age}`;

      const describtIonInput = document.createElement('p');
      describtIonInput.textContent = `${describtion}`;


      const editButtonElement = document.createElement('button');
      editButtonElement.classList.add('edit-btn');
      editButtonElement.textContent = 'Edit';

      const markAsCompleteBtn = document.createElement('button');
      markAsCompleteBtn.classList.add('complete-btn');
      markAsCompleteBtn.textContent = 'Mark as complete';

      articleElement.appendChild(h4NamesElement);
      articleElement.appendChild(personDataElement);
      articleElement.appendChild(describtIonInput);
  
      liElement.appendChild(articleElement);
      liElement.appendChild(editButtonElement);
      liElement.appendChild(markAsCompleteBtn);

      ulInfoList.appendChild(liElement);

      // submitButton.disabled = true;
      fNameElement.value = '';
      lNameElement.value = '';
      ageElement.value = '';
      descriprionElement.value = '';
      editButtonElement.addEventListener('click', edit);
      markAsCompleteBtn.addEventListener('click', complete);
      dishesInProgres.textContent = Number(dishesInProgres.textContent + 1);


      function edit() {
        // submitButton.disabled = false;
        fNameElement.value = fName;
        lNameElement.value = lName;
        ageElement.value = age;
        descriprionElement.value = describtion;
        liElement.remove();
        dishesInProgres.textContent = Number(dishesInProgres.textContent - 1);
      }
      function complete(){
        // submitButton.disabled = false;
        liElement.remove();
        finalUl.appendChild(liElement);
        editButtonElement.remove();
        markAsCompleteBtn.remove();
        dishesInProgres.textContent = Number(dishesInProgres.textContent - 1);
      }
      clearBtn.addEventListener("click", clear)
      function clear(){
        liElement.remove()
      }
}
}
