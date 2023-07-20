const stringToArray = (string: string) => {
  const array = string.split(',').map((item) => item.trim()).filter((item) => item !== '');
  return array;
};

export default stringToArray;
