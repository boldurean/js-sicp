import {
  cons as consList, l, random, head, reverse,
} from '@hexlet/pairs-data';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const newLog = head(log);
      return consList({
        message: `${name1} был убит`,
        health1: newLog.health1,
        health2: newLog.health2,
      }, log);
    }
    const card = customRandom(cards);
    const cardName = card.name;
    const damage = card.damage(health2);
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;

    let stats;
    if (order === 1) {
      stats = {
        health1,
        health2: newHealth,
        message,
      };
    } else if (order === 2) {
      stats = {
        health1: newHealth,
        health2: health1,
        message,
      };
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => (
  (name1, name2) => run(name1, name2, cards, customRandom)
);
