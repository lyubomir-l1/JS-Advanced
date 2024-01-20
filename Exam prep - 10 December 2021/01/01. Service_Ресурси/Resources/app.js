window.addEventListener('load', solve);

    function solve() {
        const productTypeElement = document.querySelector('#type-product');
        const descriptionElement = document.querySelector('#description');
        const clientNamelElement = document.querySelector('#client-name');
        const clientPhoneElement = document.querySelector('#client-phone');
        const sendFormBtn = document.querySelector("button[type='submit']");

        sendFormBtn.addEventListener('click', sendFunction);
        
        const finalSection = document.querySelector("#completed-orders");
        const clearBtn = document.querySelector(".clear-btn");
        
      
      
        
        function sendFunction(event) {
          event.preventDefault();
      
          const productType = productTypeElement.value;
          const description = descriptionElement.value;
          const clientName = clientNamelElement.value;
          const clientPhone = clientPhoneElement.value;
    
          if (
              description === '' ||
              clientName === '' ||
              clientPhone === '' 
          ) {
              return;
          }

          const sectionElement = document.querySelector("#received-orders");
      
          const divElement = document.createElement("div");
          divElement.classList.add('conteiner');
      
          const productToDiv = document.createElement('h2');
          productToDiv.textContent = `Product type for repair: ${productType}`;
          const clientInformation = document.createElement('h3');
          clientInformation.textContent = `Client information: ${clientName}, ${clientPhone}`;
          const descriptionOfProblem = document.createElement('h4');
          descriptionOfProblem.textContent = `Description of the problem: ${description }`;

          const startButtonElement = document.createElement('button');
          startButtonElement.classList.add('start-btn');
          
          startButtonElement.textContent = 'Start repair';
      
          const finishButtonElement = document.createElement('button');
          finishButtonElement.classList.add('finish-btn');
          finishButtonElement.textContent = 'Finish repair';
          
      
          divElement.appendChild(productToDiv);
          divElement.appendChild(clientInformation);
          divElement.appendChild(descriptionOfProblem);
          divElement.appendChild(startButtonElement);
          divElement.appendChild(finishButtonElement);

          sectionElement.appendChild(divElement);
           
          startButtonElement.addEventListener("click", start);
         
          finishButtonElement.addEventListener("click", finish);
          finishButtonElement.disabled = true;finishButtonElement.disabled = true;

          descriptionElement.value = '';
          clientNamelElement.value = '';
          clientPhoneElement.value = '';

          function start() {
            startButtonElement.disabled = true;
            finishButtonElement.disabled = false;
          }
          function finish(){
            startButtonElement.remove();
            finishButtonElement.remove();
            finalSection.appendChild(divElement)
            clearBtn.addEventListener("click", clear)
          }
          
          function clear(){
            divElement.remove()    
       }
          
}

}
