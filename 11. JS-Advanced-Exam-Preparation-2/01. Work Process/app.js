function solve() {
    const fNameElement = document.querySelector('#fname');
    const lNameElement = document.querySelector('#lname');
    const emailElement = document.querySelector('#email');
    const dateOofBirthElement = document.querySelector('#birth');
    const positionElement = document.querySelector('#position');
    const salaryElement = document.querySelector('#salary');
    const hireButton = document.querySelector('#add-worker');
    const sumSalary = document.querySelector("#sum");
 
    hireButton.addEventListener('click', hireWorker);
    function hireWorker(event){
        event.preventDefault();

        const firstName = fNameElement.value;
        const lastName = lNameElement.value;
        const email = emailElement.value;
        const dateOofBirth = dateOofBirthElement.value;
        const position = positionElement.value;
        const salary = salaryElement.value;
        if (!firstName || !lastName || !email || !dateOofBirth || !position || !salary){
            return;
        }
        const bodyElement = document.querySelector("#tbody");
        const newWorkerList = document.createElement("tr");
        newWorkerList.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${dateOofBirth}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class ='fired'>Fired</button> <button class ='edit'>Edit</button></td>
        `
        newWorkerList.querySelector(".fired").addEventListener("click", fired);
       
        newWorkerList.querySelector(".edit").addEventListener("click", edit);
       
        bodyElement.appendChild(newWorkerList);
        sumSalary.textContent = (Number(sumSalary.textContent) + Number(salary)).toFixed(2);
        fNameElement.value = '';
        lNameElement.value = '';
        emailElement.value = '';
        dateOofBirthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';
        function fired(){
            sumSalary.textContent = (Number(sumSalary.textContent) - Number(salary)).toFixed(2);
            newWorkerList.remove()
        }
        function edit(){
            sumSalary.textContent = (Number(sumSalary.textContent) - Number(salary)).toFixed(2);
            fNameElement.value = firstName;
            lNameElement.value = lastName;
            emailElement.value = email;
            dateOofBirthElement.value = dateOofBirth;
            positionElement.value = position;
            salaryElement.value = salary;
            newWorkerList.remove()
        }
    }
    
}
solve()