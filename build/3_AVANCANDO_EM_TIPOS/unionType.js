"use strict";
function showBalance(balance) {
    console.log(`O saldo é de: ${balance}`);
}
showBalance(100);
showBalance('400');
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usupario não aprovado";
    }
    return `A função do usuário é ${role}`;
}
showUserRole(false);
showUserRole("Admin");
