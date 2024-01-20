
class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikers = [];
        this.resources = 100;
    }
    addGoal (peak, altitude){
        if(this.goals[peak] === undefined){
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }else{
            return `${peak} has already been added to your goals`
        }
    }
    hike (peak, time, difficultyLevel){
        let curResources = time * 10
        let diff = this.resources - curResources;
        if(this.goals[peak] === undefined){
            throw new Error(`${peak} is not in your current goals`);
        }else{
            if(this.resources == 0){
                throw new Error("You don't have enough resources to start the hike");
            }
        }
        if(diff < 0){
            return "You don't have enough resources to complete the hike"
        }else{
            this.resources -= curResources;
            this.listOfHikers.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }

    }
    rest (time){
        let curTime = time * 10;
        this.resources += curTime;
        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }else{
            return `You have rested for ${time} hours and gained ${curTime}% resources`
        }
    }
    showRecord (criteria){
       if(this.listOfHikers < 1){
        `${this.username} has not done any hiking yet`
       }
       if(criteria === "hard" || criteria === "easy"){
        let found = this.listOfHikers.filter((h) => h.difficultyLevel === criteria);
        let sorted = found.sort((a, b) => a.time - b.time);
        let best = sorted[0];
        if(best === undefined){
        return `${this.username} has not done any ${criteria} hiking yet`
        }
        return `${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`
       } else if(criteria === "all"){
        let result = ["All hiking records:"]
        for (const iterator of this.listOfHikers) {
            result.push(`${this.username} hiked ${iterator.peak} for ${iterator.time} hours`)
        }
        return result.join("\n")
       }
                
    }
}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));
const user = new SmartHike('Vili');
console.log(user.showRecord('all'));





