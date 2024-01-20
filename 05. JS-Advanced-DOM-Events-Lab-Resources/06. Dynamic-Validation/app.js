function validate() {
    let regEx = /[a-z]+@[a-z]+\.[a-z]+/g
    let input = document.getElementById("email");
    input.addEventListener("change", function(){
        if(regEx.test(input.value)){
            input.className = ""
            
        }else{
            input.className = "error"
            console.log(regEx.test(input.value));
        }
    })
    }
