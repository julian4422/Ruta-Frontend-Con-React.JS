var hello = 'hello';
let world = 'hello world';
const helloworld ='hello world';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

// mala practica -->
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);

// no hacer
const anotherFunction = () => {
    var localVar = globalVar = 'im global';
}

anotherFunction();
console.log(globalVar); 