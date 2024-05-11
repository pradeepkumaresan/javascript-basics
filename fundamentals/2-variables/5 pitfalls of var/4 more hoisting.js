/**
 * hoisting of the declarations happenes here. but x and y are 
 * not initialized yet. so the output is NaN
 */
{
  console.log(x + y); // NaN
  var x = 1;
  var y = 2;
}

/**
 * these two are not hoisted because it's not declared 
 * with var, let, or const
 */
try{
  console.log(z + a); // ReferenceError: z is not defined
   z = 1;
   a = 2;
}
catch(e){
  console.error(`${e.name}: ${e.message}`);
}