import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Loader from '../Loader/image-loader'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));

function RoundedAvatar({ src }) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <Avatar
      style={{ marginLeft: '1.5rem' }}
      alt=""
      className={classes.avatar}
    >
      {isLoading ? 
      <>
       <Loader />
      </> : null}
      <img
        src={src}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={classes.img}
        style={{ display: isLoading ? 'none' : 'inherit' }}
        alt=""
      />
    </Avatar>
  );
}

export default RoundedAvatar;
