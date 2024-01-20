window.addEventListener("load", solve);

function solve() {
  const theRealBody = document.querySelector('.body');
  const divToFinal = document.querySelector('#main');
  const fNameElement = document.querySelector('#first-name');
  const lNameElement = document.querySelector('#last-name');
  const ageElement = document.querySelector('#age');
  const storyTitleElement = document.querySelector('#story-title');
  const genreElement = document.querySelector('#genre');
  const storyElement = document.querySelector('#story');
  const publishButton = document.querySelector('#form-btn');

  publishButton.addEventListener('click', publish);

  function publish(event) {
      event.preventDefault();

      const fName = fNameElement.value;
      const lName = lNameElement.value;
      const age = ageElement.value;
      const storyTitle = storyTitleElement.value;
      const genre = genreElement.value;
      const story = storyElement.value;

      if (
          fName === '' ||
          lName === '' ||
          age === '' ||
          storyTitle === '' ||
          story === '' 
      ) {
          return;
      }

      const ulPriviewList = document.querySelector('#preview-list');

      const liElement = document.createElement('li');
      liElement.classList.add('story-info');

      const articleElement = document.createElement('article');

      const h4NamesElement = document.createElement('h4');
      h4NamesElement.textContent = `Name: ${fName} ${lName}`;

      const agePelement = document.createElement('p');
      agePelement.textContent = `Age: ${age}`;

      const titleElement = document.createElement('p');
      titleElement.textContent = `Title: ${storyTitle}`;

      const genrePelement = document.createElement('p');
      genrePelement.textContent = `Genre: ${genre}`;
      const plotElement = document.createElement('p');
      plotElement.textContent = `${story}`;

      const saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      saveBtn.textContent = 'Save Story';

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit Story';

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete Story';

      

      articleElement.appendChild(h4NamesElement);
      articleElement.appendChild(agePelement);
      articleElement.appendChild(titleElement);
      articleElement.appendChild(genrePelement);
      articleElement.appendChild(plotElement);

      liElement.appendChild(articleElement);
      liElement.appendChild(saveBtn);
      liElement.appendChild(editBtn);
      liElement.appendChild(deleteBtn);

      ulPriviewList.appendChild(liElement);

      publishButton.disabled = true;
      fNameElement.value = '';
      lNameElement.value = '';
      ageElement.value = '';
      storyTitleElement.value = '';
      storyElement.value = '';

      editBtn.addEventListener('click', edit);

      function edit() {
        publishButton.disabled = false;

          fNameElement.value = fName;
          lNameElement.value = lName;
          ageElement.value = age;
          storyTitleElement.value = storyTitle;
          storyElement.value = story;

          liElement.remove();
      }

      saveBtn.addEventListener('click', save);

      
      function save() {
        divToFinal.remove();
        const divElement = document.createElement('div');
        divElement.setAttribute("id", "main");
        const sign = document.createElement("h1");
        sign.textContent = "Your scary story is saved!"
        divElement.appendChild(sign);
        theRealBody.appendChild(divElement);

      }
      deleteBtn.addEventListener('click', deleteFunc);

      function deleteFunc(){
        liElement.remove();
        publishButton.disabled = false;
      }
  }
}
