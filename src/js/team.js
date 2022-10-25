import Character from './character.js';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(characterObj) {
    const check = this.members.has(characterObj);
    if (check) {
      throw new Error('This type character is exists');
    }
    this.members.add(characterObj);
  }

  addAll(...args) {
    args.map((item) => {
      if (!this.members.has(item)) {
        return this.members.add(item);
      }
      return item;
    });
  }

  toArray() {
    return [...this.members];
  }
}

const character = new Character('testName', 'type 1');
const character2 = new Character('testName', 'type 2');
const team = new Team();

team.add(character);
team.addAll(character, character2);
console.log(team.toArray());
console.log(team);
