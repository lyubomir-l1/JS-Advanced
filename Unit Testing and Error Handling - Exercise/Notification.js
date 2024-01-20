function notify(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block"
    notification.addEventListener("click", () =>{
      notification.style.display = "none"
    })
    // const notifierBtn = document.querySelector("button");
    // notifierBtn.
    }