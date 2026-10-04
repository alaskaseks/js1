const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

class OrderItem {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}

async function main() {
  const order = [];

  while (true) {
    const wantToAdd = await ask('Do you want to add an item to your order? (yes/no): ');

    if (wantToAdd === 'no') break;

    if (wantToAdd !== 'yes') {
      console.log('Please enter "yes" or "no".');
      continue;
    }

    let name = await ask('Choose an item (Cola/Pizza): ');
    while (name !== 'Cola' && name !== 'Pizza') {
      name = await ask('Invalid input. Enter "Cola" or "Pizza": ');
    }

    let size = await ask('Choose a size (S/M): ');
    while (size !== 'S' && size !== 'M') {
      size = await ask('Invalid size. Enter "S" or "M": ');
    }

    let price = parseFloat(await ask('Enter the price: '));
    while (isNaN(price) || price <= 0) {
      price = parseFloat(await ask('Invalid price. Enter a number greater than 0: '));
    }

    const item = new OrderItem(name, size, price);
    order.push(item);

    console.log(`Added: ${item.name} (${item.size}) — ${item.price} UAH\n`);
  }

  rl.close();
  printSummary(order);
}

function printSummary(order) {
  console.log('\n===== FINAL ORDER =====');

  const counts = {};
  let totalSum = 0;
  let pizzaSum = 0;
  let colaSum = 0;

  for (const item of order) {
    counts[item.name] = (counts[item.name] || 0) + 1;
    totalSum += item.price;

    if (item.name === 'Pizza') pizzaSum += item.price;
    else colaSum += item.price;
  }

  for (const [name, count] of Object.entries(counts)) {
    console.log(`${name}: ${count} pcs.`);
  }

  console.log(`\nOrder total: ${totalSum} UAH`);
  console.log(`Pizza total 🍕: ${pizzaSum} UAH`);
  console.log(`Cola total 🥤: ${colaSum} UAH`);
}

main();