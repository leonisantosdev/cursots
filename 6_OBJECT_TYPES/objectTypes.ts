// Aqui temos a criação de uma interface, assim como ja vimos anteriormente
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

// Aqui estamos passando para o parâmetro da função a interface fazendo com que
// os parâmetro requisitem as propriedades que estão dentro da interface, isto
// serve para agilizar e organizar código repetitivos que nos gerariam confusão.
function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é RS${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponivel!");
  }
}

// Logo após teriamos a opção de criar os parâmetros direto no escopo da função
// ou criar um objeto do tipo Product e passar para as propriedades agora os valores
// fazendo que depois possamos passar apenas o objeto direto no parâmetro da função.
const leggs: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true,
};

// Aqui está um exemplo do que foi explicado logo a cima.
showProductDetails(leggs);
