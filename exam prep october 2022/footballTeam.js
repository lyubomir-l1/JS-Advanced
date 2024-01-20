class FootballTeam{
constructor(clubName, country){
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];  
}
newAdditions(footballPlayers){
    footballPlayers.map(p => {
        let [name, age, playervalue] = p.split("/");
        age = Number(age);
        playervalue = Number(playervalue);
        let player = this.invitedPlayers.find(p => p.name == name);
        if(player){
            if(player.playervalue < playervalue) {
                player.playervalue = playervalue;
            } 
        }else{
            this.invitedPlayers.push({name, age, playervalue})
        }
    });
    let result = [];
    this.invitedPlayers.map(p => result.push(p.name));
    return `You successfully invite ${result.join(", ")}.`
}
signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer);
        let player = this.invitedPlayers.find(p => p.name == name);
        if(!player){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(player.playervalue > playerOffer){
            let priceDifference = player.playervalue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${player.name}, ${priceDifference} million more are needed to sign the contract!`)
        }
        if (player.playervalue <= playerOffer){
            player.playervalue = "Bought";
            return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`
        }
   
}
ageLimit(name, age){
    let player = this.invitedPlayers.find(p => p.name == name);
    let diff = Math.abs(player.age - age);
    if(!player){
        throw new Error(`${name} is not invited to the selection list!`)
    }
    if(player.age < age){
        if(diff < 5){
            return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
        }else{
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    }else{
        return `${name} is above age limit!`
    }
}
transferWindowResult(){
    let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
    let finalResult = ["Players list:"];
    for (const player of sorted) {
        finalResult.push(`Player ${player.name}-${player.playervalue}`)
    }
    return finalResult.join("\n")
}
}
// let fTeam = new FootballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
//  let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));
let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.table(fTeam.transferWindowResult());


