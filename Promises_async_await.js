//Create Promise callback function resolve-NumRandom
//
const promiseRequest = new Promise((resolve, reject) => {
  setTimeout(() => {
    const NumRandom = function randomNumber() {
      const min = 1;
      const max = 100;
      let randomValue = Math.floor(Math.random() * (max - min) + min);
      return randomValue;
    };
    resolve(NumRandom());
  }, 3000);
});

//Processing a promise data
promiseRequest.then((data) => {
  console.log(
    `Cгенерировать случайное целое число от 1 до 100:` + " " + `Число: ${data}`
  );
  //Retrun new promise with conditions data
  return new Promise((resolve, reject) => {
    if (data % 2 === 0) {
      resolve(
        console.log(`«Завершено успешно. Сгенерированное число — ${data}»`)
      );
    } else {
      reject(
        console.log(`«Завершено с ошибкой.Сгенерированное число — ${data}»`)
      );
    }
  });
});
