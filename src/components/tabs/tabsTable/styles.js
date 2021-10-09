const styles = theme => ({
  root: {
    '&>.MuiGrid-root.MuiGrid-container': {
      maxWidth: 760,
    },

    '& .MuiPaper-elevation2': {
      boxShadow: 'none',
      borderRadius: '20px 20px 0px 0px',
      outline: '2px solid #F5F6FB',
    },

    '& .MuiTable-root': {
      borderRadius: '20px 20px 0px 0px',

      '& .MuiTableHead-root': {
        height: 60,
        backgroundColor: '#F5F6FB',
        borderRadius: '20px 20px 0px 0px !important',

        '& .MuiTableRow-head': {
          borderRadius: 6,

          '& .MuiTableCell-head': {
            backgroundColor: '#F5F6FB',
            '&.MTableHeader-header-17:first-child': {
              borderRadius: '20px 0px 0px 0px',
            },
            '&.MTableHeader-header-17.MuiTableCell-paddingCheckbox': {
              borderRadius: '0px 20px 0px 0px !important',
            },
          },
        },

        '& .MuiTableRow-root .MuiTableSortLabel-root': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: 16,
          lineHeight: 1.5,
          color: '#000',
          '&.MuiTableRow-head': {
            backgroundColor: '#F5F6FB',
          },
        },
      },
    },

    '& .MuiTableCell-root': {
      borderBottom: '2px solid #F5F6FB',
    },

    '& .MuiTableRow-root': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 12,
      lineHeight: 1.67,
      color: '#52555F',

      '& .high': {
        color: '#407946',
      },

      '& .low': {
        color: '#E7192E',
      },
    },

    // '& tr:nth-of-type(even)': {
    //   borderRadius: 6,
    //   backgroundColor: '#F5F6FB',
    // },
  },
});

export default styles;
