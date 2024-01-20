function validate() {
    const field = document.getElementById("email");
    field.addEventListener("change", () => {
    if(field.value.match(/[a-z]+\@[a-z]+\.[a-z]+/g)){
      field.classList.remove("error")  
    }else{field.classList.add("error")}
    })
    
    }