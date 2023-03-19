const receivesAFunction = callback => callback();

const returnsANamedFunction = () => Math.asin;

const returnsAnAnonymousFunction = () => function () {console.log("Hello World")};