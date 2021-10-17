/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
import { useSelector } from 'react-redux';
import ledgerSelectors from '../../redux/ledger/ledger-selectors';

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

  console.log(getData(result));
  return getData(result);
};

export default reportSLiderLogic;
