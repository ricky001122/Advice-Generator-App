  let fetchAdvice = async () => {                                       // async functions.
  let res = await fetch("https://api.adviceslip.com/advice")
  let data = await res.json()       
  
     console.log(data)

      document.getElementById("title").innerHTML = `Advice #${data.slip.id}`
      document.getElementById("text").innerHTML = `"${data.slip.advice}"`
 }
  
  fetchAdvice();




 /*syntactically identical to the code for creating JavaScript objects*/
 /* await serves as a request*/
/*JSON (JavaScript Object Notation) is a general format to represent values and objects.*/  
// two seconds lag due to API.
//api fetch data between interfaces.
//application programming interface.


