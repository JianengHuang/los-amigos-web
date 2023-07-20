

const filterStringsInArray = (array: string[]) => {
  return array.map((string) => string.trim().toLowerCase());
};

export default filterStringsInArray;
