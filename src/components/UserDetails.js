import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const UserDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="user-details">
        <TextField
          id="firstName"
          label="First Name"
          value={props.state.firstName}
          onChange={(e) => props.inputChanged("firstName", e.target.value)}
        />
        <TextField id="lastName" label="Last Name" value={props.state.lastName} onChange={(e) => props.inputChanged("lastName", e.target.value)} />
        <TextField id="email" label="Email" value={props.state.email} onChange={(e) => props.inputChanged("email", e.target.value)} />
        <Button variant="contained" color="primary" onClick={props.next}>
          continue
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
