// async() and await()
async function fetchMethod() {
  try {
    /**
     * fetch returns a promise.
     * The await keyword pauses the execution of the function 
     * until the Promise returned by fetch() is resolved or 
     * rejected. 
     */
    let response = await fetch("https://api.github.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchMethod();