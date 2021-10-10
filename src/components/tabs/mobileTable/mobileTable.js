import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const MobileTable = props => {
  const { data } = props;

  const classes = makeStyles(theme => styles(theme))();

  return (
    <ul className={classes.transactionsList}>
      {data.map(item => (
        <li>
          <div>
            <h2>{data.description}</h2>
            <span>{data.date}</span>
            <span>{data.category}</span>
            <span>{data.sum}</span>
            {data.action}
          </div>
          <div />
        </li>
      ))}
    </ul>
  );
};

export default MobileTable;
