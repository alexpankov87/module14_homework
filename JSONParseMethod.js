//Declare JSON object
const jsonStr = `{
                   "list": [
                    {
                     "name": "Petr",
                     "age": "20",
                     "prof": "mechanic"
                    },
                    {
                     "name": "Vova",
                     "age": "60",
                     "prof": "pilot"
                    }
                   ]
                  }`;

//Call JSON Parser
const data = JSON.parse(jsonStr);

const personObj = data.list;

let result = [];

//Сall the cycle
personObj.forEach((jsonElem) => {
  //iterate over elements in a loop
  let person = {
    name: jsonElem.name,
    age: Number(jsonElem.age),
    prof: jsonElem.prof,
  };
  //Add JSONObj to Array
  result.push(person);
});
//Print result
console.log("list", result);
