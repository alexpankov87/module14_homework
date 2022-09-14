//Just call DOMParser
const XMLPARSER = new DOMParser();

//Query xml string object to parse
const xmlStringParse = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let result = [];
//Query DOM object
const DOMXML = XMLPARSER.parseFromString(xmlStringParse, "text/xml");
const studentNode = DOMXML.querySelectorAll("student");
//iterate over elements in a loop
studentNode.forEach((nodeElem) => {
  //Create object in loop
  let studentObj = {
    name:
      `${nodeElem.querySelector("first").textContent}` +
      " " +
      `${nodeElem.querySelector("second").textContent}`,
    age: Number(nodeElem.querySelector("age").textContent),
    prof: nodeElem.querySelector("prof").textContent,
    lang: nodeElem.querySelector("name").getAttribute("lang"),
  };
  //Add obeject in array
  result.push(studentObj);
});

console.log("result", result);
