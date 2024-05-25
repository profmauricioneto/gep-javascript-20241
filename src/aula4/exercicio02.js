// Simulando a API 1
function executeFirstAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = "Data from API 01";
      console.log("API01 resolved");
      resolve(resultado);
    }, 2000);
  });
}

// Simulando a API 2 com base nos dados da API 1
function executeSecondAPI(API01_data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = `Processed data from API 01: ${API01_data}, and
    the new data from API 02`;
      console.log("API02 resolved");
      resolve(resultado);
    }, 2000);
  });
}

// Simulando a API 3 com base nos dados da API 2
function executeThridAPI(AP02_data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = `Processed data from API 02: ${AP02_data},
    and the new data from API 03`;
      console.log("API03 resolved");
      resolve(resultado);
    }, 2000);
  });
}

// Iniciar a cadeia de promessas
executeFirstAPI()
  .then((API01_data) => executeSecondAPI(API01_data))
  .then((AP02_data) => executeThridAPI(AP02_data))
  .then((finalResult) => {
    console.log("Final Result:", finalResult);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
