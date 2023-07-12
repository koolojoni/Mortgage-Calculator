const price  = 60000
let deposit  = 10000
let percent  = 106
let per_mon  = 500
let debt = price - deposit
let per_year = per_mon * 12

let debt_left = []

const n = 60;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = 0; debt >= 0; i++ ) {
    // adding i t debt in each iteration
    debt = (debt - per_year)*percent/100;
if (debt > 0) 
{ 
console.log( 'debt:', debt, 'year', i)
debt_left.push(debt)
};

if (debt < 0)
 { 
console.log('las debt:', debt,  i)
};
}
console.log(debt_left)

;