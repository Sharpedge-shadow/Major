import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../fireservices';


function SignIn(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
       Sharpedge_Shadow
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({props}) {
  const classes = useStyles();
 const history = useHistory();
  const [userId, setUserId] = React.useState('')
  const [password, setPassword] = React.useState('') 
  const [status, setstatus] = React.useState('')

  const handleSubmit=()=>{
    // history.replace('Dashboard',{from:"homepage"})
   
      auth.signInWithEmailAndPassword(userId, password)
      .then(res => {
        history.replace('Dashboard',{from: JSON.stringify(res.user)})})
      .catch(err => { 
        console.log(err)
        setstatus(<font color ='red'>Invalid UserName/Password</font>)});
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event)=>setUserId(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event)=>setPassword(event.target.value)}
              autoComplete="current-password"
            />
            <Button
              
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2"> */}
                  Forgot password?
                 <br/> {status}
                {/* </Link> */}
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <SignIn />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
