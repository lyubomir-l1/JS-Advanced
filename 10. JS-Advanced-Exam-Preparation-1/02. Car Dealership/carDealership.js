class CarDealership {
constructor(name){
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
}
addCar (model, horsepower, price, mileage){
    if(model == "" || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0){
        throw new Error("Invalid input!");;
    }
this.availableCars.push({
    model,
    horsepower,
    price,
    mileage,
})
return `New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${price.toFixed(2)}$`
}
sellCar (model, desiredMileage){
    let foundCar = this.availableCars.find((c) => c.model === model);
    let foundIndex = this.availableCars.indexOf(foundCar);
    let diffMileage = foundCar.mileage - desiredMileage;
    let sold = {
        model: foundCar.model,
        horsepower: foundCar.horsepower,
    }
    if(!foundCar){
        throw new Error(`${model} was not found!`)
    }
    if(diffMileage <= 40000 && diffMileage > 0){
        sold.soldPrice = foundCar.price * 0.95;
    }else if(diffMileage > 40000){
        sold.soldPrice = foundCar.price * 0.9;
    }else if(diffMileage <= 0){
        sold.soldPrice = foundCar.price
    }
this.availableCars.splice(foundIndex, 1);
this.soldCars.push(sold);
this.totalIncome += sold.soldPrice;
return `${model} was sold for ${(sold.soldPrice).toFixed(2)}$`
}
currentCar (){
    if(this.availableCars.length < 1){
        return "There are no available cars"
    }else{
        let result = this.availableCars.map((c) => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
       result.unshift(`-Available cars:`);
       return result.join("\n");
    }
}
salesReport (criteria){

    if (criteria == "horsepower"){
        this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
    }else if (criteria == "model"){
        this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
    }else {
        throw new Error("Invalid criteria!")
    }
    let result = this.soldCars.map((c) => `---${c.model} - ${c.horsepower} HP - ${(c.soldPrice.toFixed(2))}$`)
       result.unshift(`-${this.soldCars.length} cars sold:`);
       result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
       return result.join("\n");
}
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
