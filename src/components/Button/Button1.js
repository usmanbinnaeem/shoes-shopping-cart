import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceTwoToneIcon from "@material-ui/icons/KeyboardBackspaceTwoTone";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardBackspaceTwoToneIcon />}
      >
        Continue Shopping
      </Button>
    </div>
  );
}
