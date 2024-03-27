/**
 * Escreva um programa que possua uma função anônima que imprime os números de 1 a 10 no console, cada número deve ser apresentado a cada segundo. Dica: use a função setInterval()
*/


const showTemp = function (time) {
    let temp = 1;
    const interval = setInterval(() => {
        console.log(temp);
        temp++;
        if (temp > time) {
            clearInterval(interval);
        }
    }, 1000);
};

showTemp(5);