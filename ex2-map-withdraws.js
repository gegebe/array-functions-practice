/**
 *
 * Queremos una función que nos genere un array de strings, con el formato "Withdraw: -X" si es una retirada de dinero, o "Diposit: X" si es una entrada de dinero
 *
 * Piensa: ¿Qué metodo de array nos va a permitir convertir cada elemento del array en otro elemento diferente?
 *
 * @param {array} movements Array de numbers de movimientos bancarios
 */
function bankStatement(movements) {

  return movements.map(mov => {
        if(mov < 0){
        return `Withdraw: ${mov}`
      } else {
        return `Diposit: ${mov}`
      };
  });
  
};

// Caso de prueba 1: Array con varios movimientos de entrada y retirada.
const test1 = [100, -50, 20, -30, 10];
console.log("Caso de prueba 1:", bankStatement(test1));
// Se espera que el resultado sea ["Deposit: 100", "Withdraw: 50", "Deposit: 20", "Withdraw: 30", "Deposit: 10"].

// Caso de prueba 2: Array con solo movimientos de entrada.
const test2 = [200, 50, 100, 300];
console.log("Caso de prueba 2:", bankStatement(test2));
// Se espera que el resultado sea ["Deposit: 200", "Deposit: 50", "Deposit: 100", "Deposit: 300"].

// Caso de prueba 3: Array vacío.
const test3 = [];
console.log("Caso de prueba 3:", bankStatement(test3));
// Se espera que el resultado sea [] (ningún movimiento en el array).
