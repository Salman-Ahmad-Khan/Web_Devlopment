let bread1=prompt('which bread would you like to have: ');
let veggis1=prompt('what are your favourite veggies');
let sauce1=prompt('which sauce would you like to have: ');

function makeSandwich(bread,veggies,sauce){
            let sandwich =bread + " bread " + veggies + ' veggies ' + sauce + ' sandwich is ready';
            return sandwich;
}

let vegSandwich = makeSandwich(bread1,veggis1,sauce1);
console.log(vegSandwich);
document.write(vegSandwich);z