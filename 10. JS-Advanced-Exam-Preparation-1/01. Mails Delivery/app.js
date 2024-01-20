function solve() {
const recipientInput = document.getElementById("recipientName");
const titleInput = document.getElementById("title");
const messageInput = document.getElementById("message");
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", createMail);
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", onResetBtn);
const list = document.getElementById("list");
const recipient = recipientInput.value;
const title = titleInput.value;
const message = messageInput.value;
const deletedList = document.querySelector(".delete-list");
const sentList = document.querySelector(".sent-list");

function createMail(event){
    event.preventDefault();
    let recipient = recipientInput.value;
    let title = titleInput.value;
    let message = messageInput.value;
    if(recipient == "" || title == "" || message == ""){
        return;
    }
let element = document.createElement("li");
element.innerHTML = `<h4>Title: ${title}</h4>
<h4>Recipient Name: ${recipient}</h4>
<span>${message}</span>
<div id="list-action">
    <button type="submit" id="send">Send</button>
    <button type="submit" id="delete">Delete</button>
</div>`;
element.querySelector("#send").addEventListener("click", sendMail)
element.querySelector("#delete").addEventListener("click", deleteMail);

list.appendChild(element);
resetInput();

function sendMail(){
    let sentMail = document.createElement("li");
    sentMail.innerHTML = `
    <span>To: ${recipient}</span>
    <span>Title: ${title}</span>
    <div class="btn">
     <button type="submit" class="delete">Delete</button>
    </div>`;
    sentMail.querySelector(".delete").addEventListener("click", () => {
        const insideDeletedMail = document.createElement("li");
        insideDeletedMail.innerHTML = 
        `<span>To: ${recipient}</span>
        <span>Title: ${title}</span>`;
        deletedList.appendChild(insideDeletedMail);
        sentMail.remove();
    })
    sentList.appendChild(sentMail);
    element.remove();
}

function deleteMail(){
   let deletedMail = document.createElement("li");
    deletedMail.innerHTML = `
    <span>To: ${recipient}</span>
    <span>Title: ${title}</span>`;
    deletedList.appendChild(deletedMail);
    element.remove();
}
}
function onResetBtn(event){
    event.preventDefault();
    resetInput();
}
function resetInput(){
recipientInput.value = "";
titleInput.value = "";
messageInput.value = "";
}

function sendMail(){
    let sentMail = document.createElement("li");
    sentMail.innerHTML = `
    <span>To: ${recipient}</span>
    <span>Title: ${title}</span>
    <div class="btn">
     <button type="submit" class="delete">Delete</button>
    </div>`;
    
    sentList.appendChild(sentMail);
    sentMail.remove();
}

}
solve()