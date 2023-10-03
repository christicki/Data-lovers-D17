
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

export const filterData = (data, filterBy, value) => {
  return data.filter((character) => character[filterBy] === value);
};
