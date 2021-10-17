/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */

const reportSLiderLogic = dataToParse => {
  const result = dataToParse.reduce(
    (acc, { category, value }) =>
      !acc[category]
        ? { ...acc, [category]: value }
        : { ...acc, [category]: acc[category] + value },
    {},
  );
  // console.log(result);

  const getData = data => {
    const arr = [];
    for (const key in data) {
      arr.push({
        category: key,
        summary: data[key],
      });
    }
    return arr;
  };

  return getData(result);
};

export default reportSLiderLogic;
