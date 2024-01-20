function solve(typeOfFruit, weight, price){
    let weightInKg = weight / 1000;
    let finalPrice = weightInKg * price;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
    }