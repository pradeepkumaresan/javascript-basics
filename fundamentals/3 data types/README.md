## Datatypes of JS

|Data Types	  | Description	                         |Example                     |
|-------------|--------------------------------------|----------------------------|
|String	      |Represents textual data	             |let str = 'Hi', let str2 = "Hello", let str3 = \`Hello World\`|
|Number	      |An integer or a floating-point number |let num = 3, let num2 = 3.234, let num3 = 3e-2 |
|BigInt	      |An integer with arbitrary precision	 |let num = 900719925124740999n, let num = 1n    |
|Boolean	    |Any of two values: true or false	     |let flag = true             |
|undefined	  |A data type whose variable is not initialized	|let a;             |
|null	        |Denotes a null value	                 |let a = null;               |
|Symbol	      |Data type whose instances are unique and immutable|let value = Symbol('hello');|
|Object	      |key-value pairs of collection of data	|let student = { };         |


## Differences between null vs undefined

| Null | Undefined |
|---- | -----------|
| It is an assignment value which indicates that variable points to no object.  | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
| Type of null is object | Type of undefined is undefined  |
| The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.|
| Indicates the absence of a value for a variable | Indicates absence of variable itself |
| Converted to zero (0) while performing primitive operations | Converted to NaN while performing primitive operations |


**Logical Operators:**

The logical operators are used to combine two or more conditions.

**1. &&** - is known as AND operator. It checks whether two operands are non-zero or not (0, false, undefined, null or "" are considered as zero). It returns 1 if they are non-zero; otherwise, returns 0

**2. ||** - is known as OR operator. It checks whether any one of the two operands is non-zero or not (0, false, undefined, null or "" is considered as zero). It returns 1 if any one of of them is non-zero; otherwise, returns 0.

**3. !** - is known as NOT operator. It reverses the boolean result of the operand (or condition). !false returns true, and !true returns false.

**Assignment Operators:**

The assignment operators to assign values to variables with less key strokes.

|Operators | Description  |
|----|--------------------|
|=   |Assigns right operand value to the left operand.|
|+=  |Sums up left and right operand values and assigns the result to the left operand.|
|-=  |Subtract right operand value from the left operand value and assigns the result to the left operand.|
|*=  |Multiply left and right operand values and assigns the result to the left operand.|
|/=  |Divide left operand value by right operand value and assign the result to the left operand.|
|%=  |Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.|



## Q 4.3. What is the difference between == and === operators?

**Example:**

```js
0 == false // true
0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
NaN === NaN // false
0 === -0 // true
"0" == false // true
"0" === false // false
[] === [] // false, refer different objects in memory
{} === {} // false, refer different objects in memory
```