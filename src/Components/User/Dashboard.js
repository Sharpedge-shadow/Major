import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,useHistory,
    Switch,
    Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../fireservices';

export default function Dashboard({location}) {
 const history = useHistory();
 const user = auth.currentUser;
 console.log(user)
//  console.log(location.state.from)
  return (<div>"hello user.........." {user.displayName}</div>
    
  );
}
