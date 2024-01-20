window.addEventListener('load', solve);

function solve() {
    const fNameElement = document.querySelector('#first-name');
    const lNameElement = document.querySelector('#last-name');
    const peopleElement = document.querySelector('#people-count');
    const dateElement = document.querySelector('#from-date');
    const daysCountElement = document.querySelector('#days-count');
    const mainDivElement = document.querySelector('#main');
    const mainBody = document.querySelector('#body');
    
  
    const nextButton = document.querySelector('#next-btn');
  
    nextButton.addEventListener('click', makeReservation);
    function makeReservation(event) {
        event.preventDefault();
  
        const fName = fNameElement.value;
        const lName = lNameElement.value;
        const people = peopleElement.value;
        const date = dateElement.value;
        const days = daysCountElement.value;
  
        if (
            fName === '' ||
            lName === '' ||
            people === '' ||
            date === '' ||
            days === ''
        ) {
            return;
        }
  
        const ulInfoList = document.querySelector('.ticket-info-list');
  
        const liElement = document.createElement('li');
        liElement.classList.add('ticket');
  
        const articleElement = document.createElement('article');
  
        const h3NamesElement = document.createElement('h3');
        h3NamesElement.textContent = `Name: ${fName} ${lName}`;
  
        const fromDateElement = document.createElement('p');
        fromDateElement.textContent = `From date: ${date}`;
  
        const forDaysElement = document.createElement('p');
        forDaysElement.textContent = `For ${days} days`;
  
        const peopleNumberElement = document.createElement('p');
        peopleNumberElement.textContent = `For ${people} people`;
  
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        editButtonElement.textContent = 'Edit';
  
        const continueButtonElement = document.createElement('button');
        continueButtonElement.classList.add('continue-btn');
        continueButtonElement.textContent = 'Continue';
  
        articleElement.appendChild(h3NamesElement);
        articleElement.appendChild(fromDateElement);
        articleElement.appendChild(forDaysElement);
        articleElement.appendChild(peopleNumberElement);
  
        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);
  
        ulInfoList.appendChild(liElement);
  
        nextButton.disabled = true;
        fNameElement.value = '';
        lNameElement.value = '';
        peopleElement.value = '';
        dateElement.value = '';
        daysCountElement.value = '';
  
        editButtonElement.addEventListener('click', edit);
        function edit() {
            nextButton.disabled = false;
  
            fNameElement.value = fName;
            lNameElement.value = lName;
            peopleElement.value = people;
            dateElement.value = date;
            daysCountElement.value = days;
  
            liElement.remove();
        }
  
        continueButtonElement.addEventListener('click', continueFunc);
        function continueFunc() {
            const ulConfirmList = document.querySelector('.confirm-ticket');

            liElement.classList.remove('ticket');
            liElement.classList.add('tocket-content')
            // const liConfirlmElement = document.createElement('li');
            // liConfirlmElement.classList.add("ticket-content");

            
  
            editButtonElement.classList.remove('edit-btn'); 
            editButtonElement.classList.add('confirm-btn');
            editButtonElement.textContent = 'Confirm';
  
            continueButtonElement.classList.remove('continue-btn');
            continueButtonElement.classList.add('cancel-btn');
            continueButtonElement.textContent = 'Cancel';
  
            editButtonElement.removeEventListener('click', edit);
            editButtonElement.addEventListener('click', confirm);
            ulConfirmList.appendChild(liElement);
            function confirm() {
                mainDivElement.remove();
                const h1Element = document.createElement('h1');
                h1Element.setAttribute("id", "thank-you");
                h1Element.textContent = "Thank you, have a nice day! ";
                let backBtn = document.createElement('button');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent = "Back"
                mainBody.appendChild(h1Element);
                mainBody.appendChild(backBtn);
                // backBtn.addEventListener("click", )
               
            }
            continueButtonElement.removeEventListener('click', continueFunc);
            continueButtonElement.addEventListener('click', cancel);
            function cancel() {
                liElement.remove();
                nextButton.disabled = false;
                
            }
    }
}
}


    
    
