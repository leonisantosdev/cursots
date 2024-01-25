"use strict";
function showUserDetails(user) {
    console.log(`O usuário tem o e-email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = {
    email: "lele@gmail.com",
    role: "Developer",
};
const u2 = {
    email: "joaozinho@gmail.com",
};
