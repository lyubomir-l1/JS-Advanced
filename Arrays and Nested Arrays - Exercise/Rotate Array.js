function solve(array, num){
    for(let i = 0; i < num; i++){
       let cutted = array.pop();
       array.unshift(cutted); 
    } 
    console.log(array.join(" "));
    }