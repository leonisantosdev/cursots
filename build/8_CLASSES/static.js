"use strict";
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático!");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
