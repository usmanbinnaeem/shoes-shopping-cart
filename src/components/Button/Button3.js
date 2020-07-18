import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteSweepTwoToneIcon from "@material-ui/icons/DeleteSweepTwoTone";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        IN BASKET
      </Button>
    </div>
  );
}
