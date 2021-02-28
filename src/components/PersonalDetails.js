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

const PersonalDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="user-details">
        <TextField
          id="occupation"
          label="Occupation"
          value={props.state.occupation}
          onChange={(e) => props.inputChanged("occupation", e.target.value)}
        />
        <TextField id="city" label="City" value={props.state.city} onChange={(e) => props.inputChanged("city", e.target.value)} />
        <TextField id="bio" label="Bio" value={props.state.bio} onChange={(e) => props.inputChanged("bio", e.target.value)} />
        <div>
          <Button variant="contained" color="primary" onClick={props.prev}>
            Previous
          </Button>
          <Button variant="contained" color="primary" onClick={props.next}>
            continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
