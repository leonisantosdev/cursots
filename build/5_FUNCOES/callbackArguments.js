"use strict";
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preaprando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Lele");
preGreeting(greeting, "João");
