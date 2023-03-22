const { Fibonacci } = require('./Fibonacci');
const { Console } = require('./Console');

const fibonacci = new Fibonacci()
const app = new Console(fibonacci)
app.run()
