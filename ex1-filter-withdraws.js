/**
 * Completa la función. La función debe RETORNAR un array con todos los movimientos que implican una retirada de dinero
 *
 * Piensa: ¿qué método de array es adecuado para esta función?
 *
 * @param {array} movements Array de numbers que representa entradas y retiradas de dinero
 */
function filterWithdraws(movements) {
  return movements.filter(mov => mov < 0);
}

// Caso de prueba 1: Array con varios movimientos de entrada y retirada.
const test1 = [100, -50, 20, -30, 10];
console.log("Caso de prueba 1:", filterWithdraws(test1));
// Se espera que el resultado sea [-50, -30].

// Caso de prueba 2: Array con solo movimientos de entrada.
const test2 = [200, 50, 100, 300];
console.log("Caso de prueba 2:", filterWithdraws(test2));
// Se espera que el resultado sea [] (ninguna retirada).

// Caso de prueba 3: Array vacío.
const test3 = [66, -11];
console.log("Caso de prueba 3:", filterWithdraws(test3));
// Se espera que el resultado sea [-11] .
