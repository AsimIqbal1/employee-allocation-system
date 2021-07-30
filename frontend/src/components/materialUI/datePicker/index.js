import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

function MaterialDatePicker(props) {
    const { classes } = props;

    return (
        <TextField
            id="date"
            label="Date"
            type="date"
            value={props.value}
            onChange={props.onChangeEvent}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}

export default withStyles(styles)(MaterialDatePicker);
