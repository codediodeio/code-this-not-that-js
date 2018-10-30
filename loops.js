
const orders = [500, 30, 99, 15, 223];


'Bad Loop Code 💩'

let total = 0;
let withTax = [];
let highValue = [];
for (i = 0; i < orders.length; i++) { 

    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.1);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}


'Good Loop Code ✅'

// Reduce
total = orders.reduce((acc, cur) => acc + cur);
console.log("result of Reduce: "+total);

// Map
withTax = orders.map(v => v * 1.1);
console.log("result of Map: "+withTax);

/**
 * Filter
*/
highValue = orders.filter(v => v > 100);
console.log("result of Filter: "+highValue);

/**
 * Every
 * @returns false
 */
const everyValueGreaterThan50 = orders.every(v => v > 50);
console.log("result negative of Every: "+everyValueGreaterThan50);

/**
 * Every
 * @returns true
 */
const everyValueGreaterThan10 = orders.every(v => v > 10);
console.log("result positive of Every: "+everyValueGreaterThan10);


/**
 * Some
 * @returns false
 */
const someValueGreaterThan500 = orders.some(v => v > 500);
console.log("result negative of Some: "+someValueGreaterThan500);

/**
 * Some
 * @returns true
 */
const someValueGreaterThan10 = orders.some(v => v > 10);
console.log("result positive of Some: "+someValueGreaterThan10);

/**
 * Find
 * @returns 223
 */
const findValueEqual223 = orders.find(v => v === 223);
console.log("result of Find: "+findValueEqual223);



