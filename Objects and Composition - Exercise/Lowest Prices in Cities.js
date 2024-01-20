function solve(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++){
      const element = arr[i];
      const [town, product, price] = element.split(" | ");
      if(!obj[product]) obj[product] = {};
      obj[product][town] = Number(price);
    }
    finalRes = [];
    for (const key in obj) {
      let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
      let [town, price] = sorted[0];
      finalRes.push(`${key} -> ${price} (${town})`);
        
      }
      return finalRes.join("\n")
    }