window.addEventListener("load", solve);

function solve() {
    const makeElement = document.querySelector('#make');
    const modelElement = document.querySelector('#model');
    const productionYearElement = document.querySelector('#year');
    const fuelElement = document.querySelector('#fuel');
    const originalCostElement = document.querySelector('#original-cost');
    const sellingPriceElement = document.querySelector("#selling-price");
    const publishButton = document.querySelector('#publish');
    const ulSellElement = document.querySelector("#cars-list");
    const totalPriceElement = document.querySelector("#profit");
  
  
    publishButton.addEventListener('click', publish);
    function publish(event) {
      event.preventDefault();
  
      const make = makeElement.value;
      const model = modelElement.value;
      const productionYear = productionYearElement.value;
      const fuel = fuelElement.value;
      const originalCost = originalCostElement.value;
      const sellingPrice = sellingPriceElement.value;
      
  
      if (
          make === '' ||
          model === '' ||
          productionYear === '' ||
          fuel === '' ||
          originalCost === '' ||
          sellingPrice === '' ||
          originalCost > sellingPrice
      ) {
          return;
      }
      const bodyElement = document.querySelector("#table-body");
  
      const trElement = document.createElement("tr");
      trElement.classList.add('row');
  
      const makeTd = document.createElement('td');
      makeTd.textContent = `${make}`;
      const modelTd = document.createElement('td');
      modelTd.textContent = `${model}`;
      const productionTdTd = document.createElement('td');
      productionTdTd.textContent = `${productionYear}`;
      const fuelTd = document.createElement('td');
      fuelTd.textContent = `${fuel}`;
      const originalCostTd = document.createElement('td');
      originalCostTd.textContent = `${originalCost}`;
      const sellingPriceTd = document.createElement('td');
      sellingPriceTd.textContent = `${sellingPrice}`;
      const buttonsTd = document.createElement('td');
      const editButtonElement = document.createElement('button');
      editButtonElement.classList.add('action-btn');
      editButtonElement.classList.add(`edit`);
  
      //editButtonElement.setAttribute("id", "edit");
      editButtonElement.textContent = 'Edit';
  
      const sellButtonElement = document.createElement('button');
      sellButtonElement.classList.add('action-btn');
      sellButtonElement.classList.add(`sell`);
     //sellButtonElement.setAttribute("id", "sell");
      sellButtonElement.textContent = 'Sell';
  
      trElement.appendChild(makeTd);
      trElement.appendChild(modelTd);
      trElement.appendChild(productionTdTd);
      trElement.appendChild(fuelTd);
      trElement.appendChild(originalCostTd);
      trElement.appendChild(sellingPriceTd);
      buttonsTd.appendChild(editButtonElement)
     buttonsTd.appendChild(sellButtonElement)
     trElement.appendChild(buttonsTd);
  
      bodyElement.appendChild(trElement)
       
      
      editButtonElement.addEventListener("click", edit);
     
      sellButtonElement.addEventListener("click", sell);
      makeElement.value = '';
      modelElement.value = '';
      productionYearElement.value = '';
      originalCostElement.value = '';
      sellingPriceElement.value = '';
      
      function edit() {
        makeElement.value = make;
        modelElement.value = model;
        productionYearElement.value = productionYear;
        originalCostElement.value = originalCost;
        sellingPriceElement.value = sellingPrice;
        trElement.remove();
      
      }
      function sell(){
        trElement.remove();
        let liElement = document.createElement("li");
        liElement.classList.add('each-list');
        let modelSpanElement = document.createElement("span");
        modelSpanElement.textContent = `${make} ${model}`;
        let yearSpanElement = document.createElement("span");
        yearSpanElement.textContent = `${productionYear}`
        let profitSpanElement = document.createElement("span");
        profitSpanElement.textContent = `${sellingPrice - originalCost}`
        liElement.appendChild(modelSpanElement);
        liElement.appendChild(yearSpanElement);
        liElement.appendChild(profitSpanElement);
        ulSellElement.appendChild(liElement);
        totalPriceElement.textContent = (Number(totalPriceElement.textContent) + Number(profitSpanElement.textContent)).toFixed(2)
      }
  }
  }