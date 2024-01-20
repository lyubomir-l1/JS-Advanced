function solve(array){
    let numArr = [];
    let number = 1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === "add"){
            numArr.push(i+1);
        }else if(array[i] === "remove"){
            numArr.pop();
        }
    }
    if(!numArr.length){
        console.log("Empty");
    }else{
        console.log(numArr.join("\n"));
    }
       
    }