 const messages = [
     "Julian",
     "Ana",
     "Nicol",
     "Pedro",
     "Laura",
     "Diego" 
 ];

 const randomMsg = () => {
     const message = messages[Math.floor(Math.random() *
        messages.length)];
        console.log(message);
 };

 module.exports = { randomMsg };

