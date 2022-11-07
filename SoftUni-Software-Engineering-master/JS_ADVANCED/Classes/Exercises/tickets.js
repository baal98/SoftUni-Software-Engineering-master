function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static compareTickets(t1, t2) {
            if (criteria == 'destination') {
                return t1.destination.localeCompare(t2.destination);
            } else if (criteria == 'price') {
                return t1.price - t2.price;
            } else {
                return t1.status.localeCompare(t2.status);
            }
        }
    }

    let result = [];

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        let ticketObj = new Ticket(destination, price, status);
        result.push(ticketObj);
    }

    return result.sort(Ticket.compareTickets);
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|94.20|available',
    'Boston|126.20|departed'],
    'destination'
));


