window.addEventListener('load', solve);

function solve() {
   const modelInput = document.getElementById("model");
   const yearInput = document.getElementById("year");
   const descriptionInput = document.getElementById("description");
   const priceInput = document.getElementById("price");
   const addBtn = document.getElementById("add");
   const furnitureListField = document.getElementById("furniture-list");
   let totalPriceElement = document.querySelector(".total-price");
   addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let year = Number(yearInput.value);
    let price = Number(priceInput.value);
    let description = descriptionInput.value;
    let model = modelInput.value;
    if(!model || !description){
        return
    }
    if(year <=0 || price <= 0){
        return
    }

    let newRow = document.createElement("tr");
    newRow.classList.add("info");
    let modelData = document.createElement("td");
    let priceData = document.createElement("td");
    let actionsData = document.createElement("td");
    let hiddenInfo = document.createElement("tr");
    hiddenInfo.classList.add("hide");
    hiddenInfo.style.display = "none"
    let hiddenInfoYear = document.createElement("td");
    hiddenInfoYear.textContent = `Year: ${year}`;
    let hiddenInfoDescription = document.createElement("td");
    hiddenInfoDescription.setAttribute("colspan", 3);
    hiddenInfoDescription.textContent = `Desctription: ${description}`;
    hiddenInfo.appendChild(hiddenInfoYear);
    hiddenInfo.appendChild(hiddenInfoDescription);
    let moreInfoBtn = document.createElement("button");
    moreInfoBtn.classList.add("moreBtn")
    
    moreInfoBtn.textContent = "More Info";
    moreInfoBtn.addEventListener("click", (event) => {
        if(event.currentTarget.textContent == "More Info"){
            hiddenInfo.style.display = "contents"
            event.currentTarget.textContent = "Less Info"
        }else{
            hiddenInfo.style.display = "none"
            event.currentTarget.textContent = "More Info"
        }
        
    });
    let buiItBtn = document.createElement("button");
    buiItBtn.classList.add("buyBtn");
    buiItBtn.textContent = "Buy it";
    buiItBtn.addEventListener("click", (event) => {
        let currentTotalPrice = Number(totalPriceElement.textContent);
        let totalPrice = currentTotalPrice + price;
        totalPriceElement.textContent = totalPrice.toFixed(2)
        newRow.remove();
        hiddenInfo.remove();
        
    })
    actionsData.appendChild(moreInfoBtn);
    actionsData.appendChild(buiItBtn);
    modelData.textContent = model;
    priceData.textContent = price.toFixed(2);
    newRow.appendChild(modelData);
    newRow.appendChild(priceData);
    newRow.appendChild(actionsData);
    furnitureListField.appendChild(newRow);
    furnitureListField.appendChild(hiddenInfo);
   })
}
