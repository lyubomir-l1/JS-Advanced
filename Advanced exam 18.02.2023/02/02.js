class WineSelection{
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle (wineName, wineType, price){
        if(this.space <= this.wines.length){
            throw new Error("Not enough space in the cellar.")
        }
        else{
            let addedWine =  {
                wineName,
                wineType,
                price,
                paid: false
            }
            this.wines.push(addedWine);
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }
    payWineBottle( wineName, price ){
        let found = this.wines.find((w) => w.wineName === wineName);
        if(!found){
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if(found.paid === true){
            throw new Error(`${wineName} has already been paid.`);
        }
        this.wines.find((w) => w.wineName === wineName).paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName){
        let found = this.wines.find((w) => w.wineName === wineName);
        let foundIndex = this.wines.indexOf(found);
        if(!found){
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if(found.paid === false){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines = this.wines.splice(foundIndex, 1);
        return `You drank a bottle of ${wineName}.`

    }
    cellarRevision(wineType){
        if(!!wineType){
            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            let freeSpace = this.space - this.wines.length;
            let result = [`You have space for ${freeSpace} bottles more.`, `You paid ${this.bill}$ for the wine.`]
            sorted.map((w) => result.push(`${w.wineName} > ${w.wineType} - ${w.paid === true ? "Has Paid" : "Not Paid"}.`));
            return result.join("\n\r");
        }
        let found = this.wines.find((w) => w.wineType === wineType);
        if(!found){
            return `There is no ${wineType} in the cellar.`
        }else{
            return `${found.wineName} > ${found.wineType} - ${found.paid === true ? "Has Paid" : "Not Paid"}.` 
        }

    }
}
const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

