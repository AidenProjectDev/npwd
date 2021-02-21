import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backgroundModal: {
    background: 'black',
    opacity: '0.6',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default useStyles;
