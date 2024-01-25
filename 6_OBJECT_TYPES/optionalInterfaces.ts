// Aqui temos uma interface opcional onde sua propriedade
// pode ser passada no parâmetro da função ou não.
//  Lembrando que, devemos tratar propriedades opcionais pois,
// caso elas não sejam usadas, seu retorno é sempre 'UNDEFINED'.
interface Users {
  email: string;
  role?: string;
}

function showUserDetails(user: Users) {
  console.log(`O usuário tem o e-email: ${user.email}`);

  if (user.role) {
    // Tratando a propriedade opcional para que caso seja false, não retorne nada
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const u1: Users = {
  email: "lele@gmail.com",
  role: "Developer",
};

const u2: Users = {
  // Objeto com propriedade opcional false
  email: "joaozinho@gmail.com",
};
