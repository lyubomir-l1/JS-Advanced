function solve(array){
    let sumRows = 0;
    let sumCols = 0;
    for(let i = 0; i < array.length; i++){
        let curArr = array[i].join("");
        for(let j = 0; j < curArr.length; j++){
            sumRows += Number(curArr[j]);
            sumCols += Number(curArr[0]);
        }
    }
    if(sumCols === sumRows){
        console.log("true");
    }else{
        console.log("false");
    }
    }