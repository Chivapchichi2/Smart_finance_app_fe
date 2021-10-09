export const styles = {
  root: {
    width: 1060,
    border: '1px solid red',

    '& .PrivateTabIndicator-colorSecondary-8': {
      display: 'none',
    },

    '& .MuiButtonBase-root.MuiTab-root': {
      width: 138,
      height: 40,
      padding: '0px 20px',
      background: '#FAFBFD',
      borderRadius: '20px 20px 0px 0px',

      '& .MuiTab-wrapper': {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: '#000000',
        height: '40px',
      },
    },

    '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
      background: '#FEFEFE',

      '& .MuiTab-wrapper': {
        color: '#FF751D',
      },
    },

    '& .MuiTabPanel-root': {
      padding: '33px 20px 50px',
      backgroundColor: '#fff',
      borderRadius: '0px 30px 30px 30px',
    },
  },
};
