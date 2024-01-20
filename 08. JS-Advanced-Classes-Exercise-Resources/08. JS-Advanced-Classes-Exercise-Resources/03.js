function solve(array, string){
    class Ticket{
        constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
        }
        }
        const tickets = [];
    for (const line of array) {
        let [destination, price, status] = line.split("|");
        price = Number(price)
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }
    let sorted = tickets.sort((a, b) => {
        if(string === "destination"){
            return a.destination.localeCompare(b.destination)
        }else if(string === "status"){
            return a.status.localeCompare(b.status)
    }else if(string === "price"){
        return a.price - b.price
    }
});
return sorted

}
solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination')