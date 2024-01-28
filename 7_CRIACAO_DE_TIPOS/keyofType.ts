type Character2 = { name: string; age: number; hasDriverLicense: boolean };

type C = keyof Character2;

function showCharName(obj: Character2, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character2 = {
  name: "Lele",
  age: 24,
  hasDriverLicense: true,
};

console.log(showCharName(myChar, "name"));
// console.log(showCharName('teste', 'age'))
