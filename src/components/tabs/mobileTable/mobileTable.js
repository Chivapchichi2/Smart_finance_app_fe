/* eslint-disable react/button-has-type */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

import iconDelete from '../tabsTable/delete.svg';
import styles from './styles';

const MobileTable = props => {
  const { rows } = props;

  const classes = makeStyles(theme => styles(theme))();

  const data = [
    {
      date: '09.10.2021',
      description: 'yummyyyyyyyyyyy',
      category: 'food',
      sum: '-300',
    },
    {
      date: '09.10.2021',
      description: 'yummy',
      category: 'food',
      sum: '200',
    },
    {
      date: '09.10.2021',
      description: 'yummy',
      category: 'food',
      sum: '-100',
    },
    {
      date: '09.10.2021',
      description: 'yummy',
      category: 'food',
      sum: '350',
    },
    {
      date: '09.10.2021',
      description: 'yummy',
      category: 'food',
      sum: '100',
    },
    {
      date: '09.10.2021',
      description: 'yummy',
      category: 'food',
      sum: '350',
    },
  ];

  const onDeleteHandler = () => {};

  const getAction = id => (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      className="delButton"
      style={{ backgroundImage: `url(${iconDelete})` }}
      onClick={() => onDeleteHandler(id)}
    />
  );

  const result = data.map(item => ({
    ...item,
    sum:
      item.sum > 0 ? (
        <span className="high">{item.sum}</span>
      ) : (
        <span className="low">{item.sum}</span>
      ),
    action: getAction(),
  }));

  return (
    <ul className={classes.transactionsList}>
      {result.map(item => (
        <>
          <li key={item.description} className="transactionWrapper">
            <div className="descWr">
              <h2 className="description">{item.description}</h2>
              <div className="smallWr">
                <span className="date">{item.date}</span>
                <span className="category">{item.category}</span>
              </div>
            </div>
            <div className="sumWr">
              <span className="sum">{item.sum}</span>
              {item.action}
            </div>
          </li>
          <Divider variant="middle" />
        </>
      ))}
    </ul>
  );
};

export default MobileTable;
