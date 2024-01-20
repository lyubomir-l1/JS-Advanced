class Triathlon {
    constructor(competitionName){
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = []
    }
    addParticipant(participantName, participantGender){
        let namesArr = Object.keys(this.participants);
        if(namesArr.includes(participantName)){
            return `${participantName} has already been added to the list`
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }
    completeness (participantName, condition){
        let namesArr = Object.keys(this.participants);
        let numberOfDisciplines = Math.floor(condition / 30);
        if(!namesArr.includes(participantName)){
            throw new Error(`${participantName} is not in the current participants list`)
        }
        if(condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }
        if(numberOfDisciplines > 0 && numberOfDisciplines < 3 ){
            return `${participantName} could only complete ${numberOfDisciplines} of the disciplines`
        }
        if(numberOfDisciplines === 3){
            let currGender = this.participants[participantName];
            this.listOfFinalists.push({name: participantName, gender: currGender});
            return `Congratulations, ${participantName} finished the whole competition`
        }

    }
    rewarding (participantName){
        let namesArr = Object.keys(this.participants);
        let foundParticipant = this.listOfFinalists.find((p) => p.name == participantName);
        if(!foundParticipant){
            return `${participantName} is not in the current finalists list`
        }else{
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }
    showRecord (criteria){
        let criteriaArr = Object.values(this.participants);
        let finalistsNames = this.listOfFinalists.map(p => p.name).sort((a,b) => a.localeCompare(b));
        let foundGender = this.listOfFinalists.find((p) => p.gender == criteria);
            if(!this.listOfFinalists){
                return `There are no finalists in this competition`
            }
            if((criteria === "male" || criteria === "female") && foundGender){
                return `${foundGender.name} is the first ${foundGender.gender} that finished the ${this.competitionName} triathlon`
            }else if(!foundGender && (criteria === "male" || criteria === "female")){
                return `There are no ${criteria}'s that finished the competition`
            }
            if(criteria === "all"){
                return `List of all ${this.competitionName} finalists:
${finalistsNames.join("\n")}`
            }
            

    }
    }
    const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));


    
    




    