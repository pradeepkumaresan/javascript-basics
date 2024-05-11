/**
 * Variable Shadowing
 */
var val = 10;

function Hoist(val) {
  // The function parameter val shadows (hides) the global val
  console.log(val);
}
Hoist(20); // 20
console.log(val); // 10