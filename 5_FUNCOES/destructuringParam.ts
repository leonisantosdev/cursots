function showProductDetails( {name, price }: {name: string, price: number}):string {
  return `O nome do produto é ${name} e ele custa R$${price}` 
}

const shirt = {name: "Camisa", price: 49.99}
console.log(showProductDetails(shirt))