const name = "  abc xyz  ";
// removes leading and trailing whitespaces
console.log(name.trim()); // => 'abc xyz'

const phoneNumber = "\t  80-555-123\n ";
// removes leading and trailing whitespaces, tabs, and newlines
console.log(phoneNumber.trim()); // => '80-555-123'


const name1 = "   abc xyz  ";
console.log(name1.trimStart()); // => "abc xyz  "

const phoneNumber1 = "\t  80-555-123\n ";
console.log(phoneNumber1.trimStart());  // => "80-555-123\n "


const name2 = "  abc xyz ";
console.log(name2.trimEnd()); // => " abc xyz"

const phoneNumber2 = "\t  80-555-123\n ";
console.log(phoneNumber2.trimEnd()); // => " 80-555-123"