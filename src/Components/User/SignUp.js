import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import { auth } from '../fireservices';

const useStyles = makeStyles(theme => ({
  heading: {
    height: 'auto',
    padding: 10,
    backgroundColor: '#f5f6fa',
    margin: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 15
  },
  maincontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  mainpaper: {
    width: window.innerWidth * 0.5,
    height: 'auto',
    marginTop: 70,
    backgroundColor: '#dcdde1'

  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  input: {
    display: 'none',
  },

}));

function SignUp() {

  const classes = useStyles();
  const [userName, setUserName] = useState('')


  const [email, setEmail] = useState('')
  

  const [getList, setList] = useState(null)
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')


  const [message, setMessage] = useState('')
  const checkPass = async (event) => {
    setCPassword(event)
    if (password == event) {
      setList('hwlll')
    }
    else {
      setList(null)
    }
  }

  const handleSubmit = async () => {
    if (password === cPassword){
      console.log(password, cPassword)
      auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        if (res) {
          res.user.updateProfile({
            displayName: userName,
          })
        }
      })
      .catch(err => console.error(err))
    }
  }

  return (

    <div className={classes.maincontainer}>
      <Paper className={classes.mainpaper}>
        <Paper className={classes.heading}>
          <div style={{ fontSize: 18, fontWeight: 'bold' }}>User Registration</div>


        </Paper>
        <Grid container spacing={3} style={{ padding: 20 }}>
          <Grid item xs={12} sm={12}>
            <TextField fullWidth id="username"
              label="*User Name" variant="outlined"
              onChange={(event) => setUserName(event.target.value)} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField fullWidth id="email"
              type='email'
              label="*Email Id" variant="outlined"
              onChange={(event) => setEmail(event.target.value)} />
          </Grid>
          {/* <Grid item xs={12} sm={12}>
            <TextField fullWidth id="mobile"
              label="*Mobile no." variant="outlined"
              type='number'
              onChange={(event) => setMobile(event.target.value)} />
          </Grid> */}



          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="password"
              type='password'
              label="*Password" variant="outlined"
              onChange={(event) => setPassword(event.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="cpassword"
              type='password'
              label="*Confirm Password" variant="outlined"
              onChange={(event) => checkPass(event.target.value)} />
          </Grid>

          <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button disabled={!getList} variant="contained" id='sub' color="primary" onClick={() => handleSubmit()}>
              Submit
      </Button>
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Reset
      </Button>
          </Grid>

          <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {message}
          </Grid>

        </Grid>
      </Paper>
    </div>



  )


}
export default SignUp