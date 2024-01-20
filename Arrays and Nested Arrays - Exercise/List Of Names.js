function solve(array){
    array
    .sort((a, b) => a.localeCompare(b))
    .forEach((element, i) => {
  console.log(`${i+1}.${element}`)
});
}