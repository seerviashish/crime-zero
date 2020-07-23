const keypad = {
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

const superHero = [
  'SUPERMAN',
  'THOR',
  'ROBIN',
  'IRONMAN',
  'GHOSTRIDER',
  'CAPTAINAMERICA',
  'FLASH',
  'WOLVERINE',
  'BATMAN',
  'HULK',
  'BLADE',
  'PHANTOM',
  'SPIDERMAN',
  'BLACKWIDOW',
  'HELLBOY',
  'PUNISHER'
];

const getPossibleHeros = (currentPossible, keyValue, index) => {
  let result = [];
  let charsOfKey = keyValue.split('');
  currentPossible.forEach(heroName => {
    if (heroName.length >= index + 1 && charsOfKey.includes(heroName[index])) {
      result.push(heroName);
    }
  });
  return result;
};

const getHeroName = code => {
  let codeList = code.substr(2).split('');
  let possibleHeros = [...superHero];
  for (let index = 0; index < codeList.length; index++) {
    const keyValue = keypad[codeList[index]];
    possibleHeros = getPossibleHeros(possibleHeros, keyValue, index);
  }
  if (possibleHeros.length > 0) {
    return possibleHeros[0];
  }
};

const isCodeValid = code => {
  let match = code.match(/(0 )[2-9]+$/g);
  if (match && match.length > 0) {
    let output = match.join('').toString();
    return output === code;
  }
  return false;
};
module.exports = {getHeroName, isCodeValid};
