function solve() {

   function disable(){
      let allButtons = Array.from(document.querySelectorAll("button"));
      allButtons.forEach(button => button.disabled = true);
    }

 const productNames = Array.from(document.getElementsByClassName("product-title"));
 const addBtns = Array.from(document.getElementsByClassName("add-product"));
 const prices = Array.from(document.getElementsByClassName("product-line-price "));
 const textArea = document.querySelector("textarea");
 let collection = [];
 let totalPrice = 0;
for(let i = 0; i < productNames.length; i++){
addBtns[i].addEventListener("click", function(){
   if(!collection.includes(productNames[i].textContent)){
      collection.push(productNames[i].textContent);
   }
   let result = `Added ${productNames[i].textContent} for ${Number(prices[i].textContent).toFixed(2)} to the cart.\n`
   totalPrice += Number(prices[i].textContent);
   textArea.value += result;

});

}
const checkOutBtn = document.querySelector(".checkout");
checkOutBtn.addEventListener("click", function(){
   let final = `You bought ${collection.join(", ")} for ${totalPrice.toFixed(2)}.`
   textArea.value += final;
   disable();
});

}