import {
  cons, car, cdr, toString as pairToString,
} from '@hexlet/pairs';
import {
  cons as consList, l, random, head, reverse, toString as listToString,
} from '@hexlet/pairs-data';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    const isEven = (num) => num % 2 === 0;
    if (health2 <= 0) {
      const message = `${name2} был убит`;
      const previousStepLog = cons(cons(health1, health2), message);
      return consList(previousStepLog, log);
    }
    const nextCard = random(cards);
    const cardName = car(nextCard);
    const damage = cdr(nextCard)();
    if (!isEven(order)) {
      const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
      const stepLog = cons(cons(health1, health2 - damage), message);
      const logData = consList(stepLog, log);
      return iter(health1, name1, health2 - damage, name2, order + 1, logData);
    }
    const message = `Игрок '${name2}' применил '${cardName}' против '${name1}' и нанес урон '${damage}'`;
    const stepLog = cons(cons(health1 - damage, health2), message);
    const logData = consList(stepLog, log);
    return iter(health1 - damage, name1, health2, name2, order + 1, logData);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

console.log(listToString(head(l(3))));
console.log(pairToString(cons(1, 2)));

console.log(listToString(run()));
