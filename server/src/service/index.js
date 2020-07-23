const getHeroName = async code => {
  console.log('==========>');
};

const isCodeValid = code => {
  let match = code.match(/(0 )[2-9]\w+/g);
  if (match && match.length > 0) {
    let output = match.join('').toString();
    return output === code;
  }
  return false;
};
module.exports = {getHeroName, isCodeValid};
