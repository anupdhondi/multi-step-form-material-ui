import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Confirm = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Confirm User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="user-details">
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={props.state.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={props.state.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={props.state.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={props.state.occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={props.state.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={props.state.bio} />
          </ListItem>
        </List>
        <br />

        <Button color="secondary" variant="contained" onClick={props.prev}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={props.next}>
          Confirm & Continue
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
