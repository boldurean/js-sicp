// @ts-check

import { cons, car, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line
import { typeTag } from '@hexlet/tagged-types';
import { getName as getSimpleCardName, damage as simpleCardDamage } from './simpleCard.js';
// eslint-disable-next-line no-unused-vars
import { getName as getPercentCardName, damage as percentCardDamage } from './percentCard.js';

const isSimpleCard = (card) => typeTag(card) === 'SimpleCard';
// eslint-disable-next-line no-unused-vars
const isPercentCard = (card) => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);
    // Populate cardName and damage using suitable card
    // use imports from  percentCard.js and simpleCard.js
    const cardName = isSimpleCard(card) ? getSimpleCardName(card) : getSimpleCardName(card);
    const damage = isSimpleCard(card) ? simpleCardDamage(card) : percentCardDamage(card, health2);

    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => {
  const inner = (name1, name2) => run(name1, name2, cards, customRandom);
  return inner;
};