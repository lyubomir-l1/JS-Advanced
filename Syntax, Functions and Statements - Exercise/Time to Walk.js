function solve(steps, footprint, speed){
    let distanceInMeters = steps * footprint;
    let speedInMetersPerSec = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMetersPerSec + rest;
    let hours = Math.floor(time / 3600);
    let mins = Math.floor(time / 60);
    let secs = Math.round(time % 60);
    console.log(`${hours < 10 ? "0" : ""}${hours}:${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`);
    
    }