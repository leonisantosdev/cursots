function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

showData(5);
showData("Testando o generic");
showData(true);
showData([]);
showData(["Teste", 2]);
showData({});
