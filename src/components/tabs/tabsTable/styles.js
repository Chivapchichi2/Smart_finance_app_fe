const styles = theme => ({
  root: {
    '& .MuiTableHead-root': {
      height: 60,
      borderRadius: 6,

      '& .MuiTableRow-head': {
        borderRadius: 6,

        '& .MuiTableCell-head': {
          backgroundColor: '#F5F6FB',
        },
      },

      '& .MuiTableRow-root .MuiTableSortLabel-root': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 1.5,
        color: '#000',
      },
    },

    '& .MuiTableCell-root': {
      border: 0,
    },

    '& .MuiTableRow-root': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 1.5,
      color: '#52555F',
    },

    '& tr:nth-of-type(even)': {
      borderRadius: 6,
      backgroundColor: '#F5F6FB',
    },
  },
});

export default styles;
