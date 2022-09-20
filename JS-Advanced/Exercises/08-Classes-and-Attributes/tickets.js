function createTickets(input, criteria) {
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  const result = [];
  input.forEach(d => result.push(new Tickets(...d.split('|'))));

  const sortNumbers = ((a, b) => a - b);
  const sortStrings = ((a, b) => a[criteria].localeCompare(b[criteria]));

  return criteria === 'price' ? result.sort(sortNumbers) : result.sort(sortStrings);
}

console.log(createTickets(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination'));

// [ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' },
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]