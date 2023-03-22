const readline = require('readline');

class Console {
  constructor(fibonacci) {
    this.fibonacci = fibonacci
  }

  welcome() {
    console.log("Bem vindos ao primeiro teste da Target, Verificador de Fibonacci")
    console.log("O programa funciona assim: Basta Digitar um Número e ele retornará se ele pertence ou não a sequência de Fibonacci")
    console.log("Abaixo exemplos do funcionamento: \n")

    console.log("Input: 17711")
    this.fibonacci.verifyNumber(parseInt(17711));

    console.log("Input: 17710")
    this.fibonacci.verifyNumber(parseInt(17710));
  }

  run() {
    this.welcome()

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('Por favor, informe um número: ', (num) => {
      if (this.validateNumber(num)) {
        this.fibonacci.verifyNumber(parseInt(num));
        this.tryAgain(rl)
      } else {
        console.log('Por favor, informe um número válido.');
        this.tryAgain(rl);
      }
    });
  }

  validateNumber(num) {
    return /^\d+$/.test(num);
  }

  tryAgain(rl) {
    rl.question('Tentar novamente? (s/n) ', (answer) => {
      if (answer.toUpperCase() === 'S' || answer.toUpperCase() === 'SIM') {
        rl.question('Informe um número: ', (num) => {
          if (this.validateNumber(num)) {
            this.fibonacci.verifyNumber(parseInt(num));
            rl.close();
          } else {
            console.log('Por favor, informe um número válido.');
            this.tryAgain(rl);
          }
        });
      } else {
        rl.close();
      }
    });
  }
}

module.exports = { Console };
