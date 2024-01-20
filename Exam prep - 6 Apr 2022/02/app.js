class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant (plantName, spaceRequired){
        if(spaceRequired > this.spaceAvailable){
            throw new Error("Not enough space in the garden.")
        }else{
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            })
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }
     ripenPlant(plantName, quantity){
        let found = this.plants.find((p) => p.plantName === plantName)
        
          if(!found){
                throw new Error(`There is no ${plantName} in the garden.`)
            }
            if(found.ripe == true){
                throw new Error(`The ${plantName} is already ripe.`)
            }
            if(quantity <= 0){
                throw new Error("The quantity cannot be zero or negative.")
            }
            found.ripe = true;
            found.quantity += quantity;
            if(quantity === 1){
                return `${found.quantity} ${found.plantName} has successfully ripened.`
            }else if(quantity > 1){
                return `${found.quantity} ${found.plantName}s has successfully ripened.`
            }
            
        }
        harvestPlant(plantName) {
            let found = this.plants.find((p) => p.plantName === plantName)
            let foundIndex = this.plants.indexOf(found);
            if(!found){
                throw new Error(`There is no ${plantName} in the garden.`)
            }
            if(found.ripe == false){
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
             }
            let removed = this.plants.splice(foundIndex, 1);
            this.storage.push(removed)
           
            return `The ${plantName} has been successfully harvested.`
    }
     generateReport(){
   let buff = '';
 
        buff += `The garden has ${this.spaceAvailable} free space left.\n`;
 
        buff += `Plants in the garden: `;
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(plant => buff += `${plant.plantName}, `);
        buff = buff.substring(0, buff.length - 2);
        buff += `\n`;
        if(!this.storage.length) {
            buff += `Plants in storage: The storage is empty.`;
        } else {
            buff += `Plants in storage: `;
            this.storage.forEach(p => buff += `${p.plantName} (${p.quantity}), `);
        }
        buff = buff.substring(0, buff.length - 2);
        return buff;
}
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
