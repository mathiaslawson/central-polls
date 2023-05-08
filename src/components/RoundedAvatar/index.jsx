import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import pp from './itachi.jpg'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));

function RoundedAvatar() {
  const classes = useStyles();

  return (
    <Avatar
    style={{marginLeft: '1.5rem'}}
      alt="Profile Picture"
      src={pp}
      className={classes.avatar}
    />
  );
}

export default RoundedAvatar;
