function isValidJson(json) {
  try {
    JSON.parse(json);
    return true;
  } catch (e) {
    return false;
  }
}

console.log(isValidJson("{}")); // true
console.log(isValidJson("abc")); // false