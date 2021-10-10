const styles = theme => ({
  root: {
    // '&>.MuiGrid-root.MuiGrid-container': {
    '@media screen and (min-width: 768px)': {
      width: 605,
    },
    '@media screen and (min-width: 1280px)': {
      width: 760,
    },
    // },

    '& .MuiPaper-elevation1': {
      boxShadow: 'none',
      borderRadius: '20px 20px 0px 0px',
      outline: '2px solid #F5F6FB',
    },

    '& .MuiTable-root': {
      height: '0',
      borderRadius: '20px 20px 0px 0px',

      '& .delButton': {
        width: 32,
        height: 32,
        border: 'none',
        borderRadius: '50%',
        backgroundColor: '#F5F6FB',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(255, 117, 29, 0.2)',
          transform: 'scale(1.1)',
        },
      },

      '& .MuiTableHead-root': {
        height: 0,
        backgroundColor: '#F5F6FB',
        borderRadius: '20px 20px 0px 0px !important',

        '& .MuiTableRow-head': {
          borderRadius: 6,

          '& .MuiTableCell-head': {
            backgroundColor: '#F5F6FB',
            padding: '7px 20px',
            maxHeight: 40,
            '&.MTableHeader-header-17': {
              zIndex: 0,
            },
            // '&.MTableHeader-header-17:first-child': {
            //   borderRadius: '20px 0px 0px 0px',
            // },
            // '&.MTableHeader-header-17:last-child': {
            //   borderRadius: '0px 20px 0px 0px !important',
            // },
          },
        },

        '& .MuiTableRow-root .MuiTableSortLabel-root': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: 12,
          lineHeight: 1.5,
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: '#000',
          '&.MuiTableRow-head': {
            backgroundColor: '#F5F6FB',
          },
        },
      },
    },

    '& .MuiTableCell-root': {
      padding: '0px 20px',
      borderBottom: '2px solid #F5F6FB',
    },

    '& .MuiTableRow-root': {
      '& .MuiTableCell-root': {
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
    },

    // '& tr:nth-of-type(even)': {
    //   borderRadius: 6,
    //   backgroundColor: '#F5F6FB',
    // },
  },
});

export default styles;
