import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles(() => ({
  media: {
    height: 50,
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '80vw',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: '2vw',
  },
  styledTypo: {
      margin: '1vw'
  }
}));