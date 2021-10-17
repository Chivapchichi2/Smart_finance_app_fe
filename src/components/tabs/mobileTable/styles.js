const styles = () => ({
  transactionsList: {
    padding: '10px 20px',
    height: '160px',
    overflowY: 'scroll',
    '& .transactionWrapper': {
      display: 'flex',
      justifyContent: 'space-between',

      padding: '10px 0px',

      '& .descWr': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        '& .smallWr': {
          display: 'flex',
        },
      },

      '& .sumWr': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },

      '& .description': {
        gridArea: 'desc',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: '0.02em',
        textTransform: 'capitalize',
        color: '#52555F',
        maxWidth: '52.5vw',
        overflow: 'hidden',
      },

      '& .date': {
        gridArea: 'date',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 8,
        letterSpacing: '0.02em',
        color: '#52555F',
        marginRight: 20,
      },

      '& .category': {
        gridArea: 'cat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 8,
        letterSpacing: '0.02em',
        color: '#52555F',
      },

      '& .sum': {
        gridArea: 'sum',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        letterSpacing: '0.04em',
        color: '#52555F',
      },

      '& .delButton': {
        gridArea: 'action',
        width: 32,
        height: 32,
        marginLeft: 20,
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
      '& .high': {
        color: '#407946',
      },

      '& .low': {
        color: '#E7192E',
      },
    },
    '& .MuiDivider-root': {
      margin: '0px',
    },

    '@media screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export default styles;
