const receivesAFunction = callback => callback();

const returnsANamedFunction = (value) => returnsAnAnonymousFunction;

const returnsAnAnonymousFunction = () => function () {console.log("Hello World")};