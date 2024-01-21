function greeting(name: string): string {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preaprando a função!");

  const greet = f(userName);
  console.log(greet)
}

preGreeting(greeting, "Lele");
preGreeting(greeting, "João");