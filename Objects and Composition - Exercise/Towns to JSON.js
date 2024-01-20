function solve(arr) {
    let towns = [];
    for(let i = 1; i < arr.length; i++){
      const tokens = arr[i].split(/\s*\|\s*/g);
  const town = tokens[1];
  const lati = Number(tokens[2]).toFixed(2);
  const longti = Number(tokens[3]).toFixed(2);
  const currentObj = {
    Town: town,
    Latitude: Number(lati),
    Longitude: Number(longti),
  }
  towns.push(currentObj);
    }
    console.log(JSON.stringify(towns));
    }