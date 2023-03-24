let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

function sortfunction(a, b){
    return collator.compare(a, b)
}
let collator = new Intl.Collator();

animals.sort(sortfunction)

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
