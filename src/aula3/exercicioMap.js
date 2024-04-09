/**
 * ● Uma estação meteorológica registrou a temperatura em graus
Celsius ao longo de um dia. Crie um programa em JavaScript que
recebe um array de temperaturas em graus Celsius e retorna um
novo array contendo as temperaturas equivalentes em graus
Fahrenheit.
○ A fórmula para converter de Celsius para Fahrenheit é:
Fahrenheit = (Celsius * 9/5) + 32.
● Implemente a função converterCelsiusParaFahrenheit(tempCelsius)
que recebe um array de temperaturas em graus Celsius como
parâmetro e utiliza o método map para criar um novo array contendo
as temperaturas equivalentes em graus Fahrenheit.
*/

const tempCelsius = [39.7, 40, 24.7, 42, 37, 32];

let converterCelsiusParaFarenheit = (tempCelsius) => {
    let tempFah = tempCelsius.map(temp => (temp * 9/5) + 32);
    return tempFah;
}

console.log(converterCelsiusParaFarenheit(tempCelsius));