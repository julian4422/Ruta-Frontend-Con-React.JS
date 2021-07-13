const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();

// ambito lexico no toma ni reasigna la variable global
var scope = 'i am global';

const functionScope = () => {
    var scope = 'i am just a local';
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();