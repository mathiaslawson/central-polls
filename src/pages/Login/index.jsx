import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  makeStyles,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Logo from './login.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#f2f2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '70%',
    objectFit: 'cover',
    borderRadius: 8,
    display: 'flex',
  
  marginLeft: '4rem'
   
  },
  formContainer: {
    maxWidth: 360,
    margin: theme.spacing(0, 4),
  },
  logo: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      marginRight: theme.spacing(1),
    },
  },
  form: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={Logo} alt="Login" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.formContainer}>
          <Box className={classes.logo}>
            <Typography variant="h5">My App</Typography>
          </Box>
          <Box className={classes.form}>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" type="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submit}
            >
              Sign In
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
