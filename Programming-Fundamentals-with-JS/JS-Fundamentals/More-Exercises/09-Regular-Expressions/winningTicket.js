function winningTicket(input = '') {
  const tickets = input.split(/[\s,]+/g);
  const pattern = /([@#$^])\1{5,9}/g;

  for (const ticket of tickets) {
    const ticketLength = ticket.length;

    if (ticketLength !== 20) {
      console.log('invalid ticket');
      continue;
    }

    const leftHalf = ticket.substring(0, ticket.length / 2);
    const rightHalf = ticket.substring(ticket.length / 2);

    const leftMatch = leftHalf.match(pattern);
    const rigthMatch = rightHalf.match(pattern);

    if (!leftMatch || !rigthMatch) {
      console.log(`ticket "${ticket}" - no match`);
      continue;
    }

    const leftMatchLength = leftMatch[0].length;
    const rigthMatchLength = rigthMatch[0].length;
    const matchSymbol = leftMatch[0][0];

    if (leftMatchLength === 10 && rigthMatchLength === 10) {
      console.log(`ticket "${ticket}" - 10${matchSymbol} Jackpot!`);
    } else {
      console.log(`ticket "${ticket}" - ${Math.min(leftMatchLength, rigthMatchLength)}${matchSymbol}`);
    }
  }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');