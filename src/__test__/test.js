import Character from '../js/character.js';
import Team from '../js/team.js';

test('testing Character Class', () => {
  const character = new Character('testName', 'testType');
  expect(character.name).toBe('testName');
  expect(character.type).toBe('testType');
});

test('testing Team Class method add', () => {
  const character = new Character('testName1', 'testType1');
  const team = new Team();
  team.add(character);
  const resultObj = { members: new Set([{ name: 'testName1', type: 'testType1' }]) };
  expect(team).toEqual(resultObj);
});
test('testing Team Class method add with err', () => {
  const character = new Character('testName1', 'testType1');
  const team = new Team();
  team.add(character);
  const errCatch = () => {
    team.add(character);
  };
  expect(errCatch).toThrow('This type character is exists');
});
test('testing Team Class method addAll', () => {
  const characterOne = new Character('testName1', 'testType1');
  const characterTwo = new Character('testName2', 'testType2');
  const team = new Team();
  const resultObj = { members: new Set([{ name: 'testName1', type: 'testType1' }, { name: 'testName2', type: 'testType2' }]) };
  team.addAll(characterOne, characterTwo);
  expect(team).toEqual(resultObj);
});
