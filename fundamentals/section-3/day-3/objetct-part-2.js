// 🚀 Manipulação de objetos: Parte 2
// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

Copiar
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

/* EXERCICIO 01 */
// Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const customerName = fullOrder.name;
  const customerTel = fullOrder.phoneNumber;
  const customerAddress = fullOrder.address;

  const message = `Olá, ${deliveryPerson}, entrega para: ${customerName}, ${customerTel}, ${customerAddress.street}, ${customerAddress.number}, ${customerAddress.apartment}.`;

  return message;
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
}

console.log(orderModifier(order));

// Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.